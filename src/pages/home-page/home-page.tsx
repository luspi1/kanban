import { type FC } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'
import { DragDropContext, type DraggableLocation, type DropResult } from 'react-beautiful-dnd'

import {
	useGetColumnsQuery,
	useGetTitleQuery,
	useGetTracksQuery,
	useReorderColumnMutation,
	useSetColumnsMutation,
} from 'src/store/tasks/tasks.api'
import { type KanbanColumn, type TaskCard } from 'src/types/tasks'
import { TitleColumns } from 'src/components/title-columns/title-columns'
import { Tracks } from 'src/components/tracks/tracks'

import styles from './index.module.scss'
import { useParams } from 'react-router-dom'

export const HomePage: FC = () => {
	const { boardId } = useParams()

	const { data: tracks } = useGetTracksQuery(boardId)
	const { data: titleColumns } = useGetTitleQuery(boardId)
	const { data: allColumns } = useGetColumnsQuery(boardId)
	const [reorderColumn] = useReorderColumnMutation()
	const [setColumns] = useSetColumnsMutation()

	const reorder = (list: TaskCard[], startIndex: number, endIndex: number) => {
		const result = Array.from(list)
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)

		return result
	}
	const move = (
		source: TaskCard[],
		destination: TaskCard[],
		droppableSource: DraggableLocation,
		droppableDestination: DraggableLocation
	) => {
		const sourceClone = Array.from(source)
		const destClone = Array.from(destination)
		const [removed] = sourceClone.splice(+droppableSource.index, 1)

		destClone.splice(droppableDestination.index, 0, removed)
		const result: any = []
		result[+droppableSource.droppableId] = sourceClone
		result[+droppableDestination.droppableId] = destClone

		return result
	}
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
				setColumns({ boardId, ...newState }).catch((e) => console.error(e))
			}
		}
	}

	return (
		<Container className={styles.homePage} margin='20px auto 35px auto'>
			<Helmet>
				<title>Канбан</title>
			</Helmet>
			<TitleColumns columns={titleColumns} />

			<DragDropContext onDragEnd={onDragEnd}>
				<Tracks tracks={tracks} />
			</DragDropContext>
		</Container>
	)
}
