import { type BoardId, type KanbanColumn } from 'src/types/tasks'
import React, { type FC, useEffect } from 'react'
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
import { useActions } from 'src/hooks/actions/actions'
import { getLocaleTracks } from 'src/store/tasks/tasks.selectors'
import { useAppSelector } from 'src/hooks/store'
import { POLLING_INTERVAL } from 'src/helpers/consts'

export const Tracks: FC = () => {
	const { boardId } = useParams()

	const { data: tracks } = useGetTracksQuery(boardId)
	const { data: allColumns } = useGetColumnsQuery(boardId, {
		pollingInterval: POLLING_INTERVAL,
	})
	const [reorderColumn] = useReorderColumnMutation()
	const [setColumns] = useSetColumnsMutation()

	const { reorderLocaleColumn, setLocaleTracks, updateAllLocaleColumns } = useActions()
	const localeTracks = useAppSelector(getLocaleTracks)

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
				reorderLocaleColumn(resultColumn)
				reorderColumn({ boardId, ...resultColumn }).catch((e) => console.error(e))
			} else {
				const result = move(allColumns[sInd].tasks, allColumns[dInd].tasks, source, destination)
				const newState = [...allColumns]
				const sCol: KanbanColumn = { ...newState[sInd], tasks: result[sInd] }
				const dCol: KanbanColumn = { ...newState[dInd], tasks: result[dInd] }
				newState[sInd] = sCol
				newState[dInd] = dCol
				updateAllLocaleColumns(newState)
				setColumns([boardId as BoardId, [...newState]]).catch((e) => console.error(e))
			}
		}
	}

	const handleShowTrack = (e: React.MouseEvent<HTMLElement>) => {
		const currentTasks = e.currentTarget?.nextElementSibling
		const currentSvg = e.currentTarget?.querySelector('svg')
		currentTasks?.classList.toggle('_hidden')
		currentSvg?.classList.toggle('_rotate')
	}

	useEffect(() => {
		setLocaleTracks(tracks ?? [])
	}, [tracks])

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			{localeTracks?.map((trackItem) => (
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
