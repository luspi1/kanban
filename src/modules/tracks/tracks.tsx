import { type BoardId, type KanbanColumn } from 'src/types/tasks'
import React, { type FC } from 'react'
import { TaskColumns } from 'src/modules/tracks/components/task-columns/task-columns'

import styles from './index.module.scss'
import { TrackArrowSvg } from 'src/UI/icons/trackArrowSVG'
import { useParams } from 'react-router-dom'
import {
	useGetColumnsQuery,
	useGetTracksQuery,
	useReorderColumnMutation,
	useSetColumnsMutation,
} from 'src/store/tasks/tasks.api'
import { DragDropContext, type DropResult } from 'react-beautiful-dnd'
import { move, reorder } from 'src/helpers/utils'

export const Tracks: FC = () => {
	const { boardId } = useParams()

	const { data: tracks } = useGetTracksQuery(boardId)
	const { data: allColumns } = useGetColumnsQuery(boardId)
	const [reorderColumn] = useReorderColumnMutation()
	const [setColumns] = useSetColumnsMutation()

	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result
		if (!destination) {
			return
		}
		const sInd = +source.droppableId
		const dInd = +destination.droppableId

		if (allColumns) {
			if (sInd === dInd) {
				const items = reorder(allColumns[sInd].tasks, source.index, destination.index)
				const resultColumn: KanbanColumn = { ...allColumns[sInd], tasks: items }
				reorderColumn({ boardId, ...resultColumn }).catch((e) => console.error(e))
			} else {
				const result = move(allColumns[sInd].tasks, allColumns[dInd].tasks, source, destination)
				const newState = [...allColumns]
				const sCol: KanbanColumn = { ...newState[sInd], tasks: result[sInd] }
				const dCol: KanbanColumn = { ...newState[dInd], tasks: result[dInd] }
				newState[sInd] = sCol
				newState[dInd] = dCol

				setColumns([boardId as BoardId, [...newState]]).catch((e) => console.error(e))
			}
		}
	}

	const handleShowTrack = (e: React.MouseEvent<HTMLElement>) => {
		const currentTasks = e.currentTarget?.nextElementSibling
		currentTasks?.classList.toggle('_hidden')
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			{tracks?.map((trackItem) => (
				<div className={styles.tracksList} key={trackItem.id}>
					<div className={styles.tracksTitle} onClick={handleShowTrack}>
						<TrackArrowSvg />
						<h4>{trackItem.title}</h4>
						<span className={styles.tracksLine}></span>
					</div>
					<TaskColumns columns={trackItem.columns} />
				</div>
			))}
		</DragDropContext>
	)
}
