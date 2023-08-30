import { type FC, useEffect, useState } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'
import { DragDropContext, type DropResult } from 'react-beautiful-dnd'

import { useGetColumnsQuery, useReorderColumnMutation } from 'src/store/tasks/tasks.api'
import { TaskColumns } from 'src/components/task-columns/task-columns'
import { type KanbanColumn, type TaskCard } from 'src/types/tasks'

export const HomePage: FC = () => {
	const { data: columns } = useGetColumnsQuery(null)
	const [reorderColumn] = useReorderColumnMutation()

	const reorder = (list: TaskCard[], startIndex: number, endIndex: number) => {
		const result = Array.from(list)
		const [removed] = result.splice(startIndex, 1)
		result.splice(endIndex, 0, removed)

		return result
	}
	const move = (source, destination, droppableSource, droppableDestination) => {
		const sourceClone = Array.from(source)
		const destClone = Array.from(destination)
		const [removed] = sourceClone.splice(droppableSource.index, 1)

		destClone.splice(droppableDestination.index, 0, removed)

		const result = {}
		result[droppableSource.droppableId] = sourceClone
		result[droppableDestination.droppableId] = destClone

		return result
	}
	const onDragEnd = (result: DropResult) => {
		const { source, destination } = result
		if (!destination) {
			return
		}
		const sInd = +source.droppableId
		const dInd = +destination.droppableId

		if (columns) {
			if (sInd === dInd) {
				const items = reorder(columns[sInd].tasks, source.index, destination.index)
				const resultColumn: KanbanColumn = { ...columns[sInd], tasks: items }
				reorderColumn(resultColumn).catch((e) => console.error(e))
			} else {
				const result = move(columns[sInd].tasks, columns[dInd], source, destination)
				console.log(result)
				// const newState = [...columns]
				// newState[sInd] = result[sInd]
				// newState[dInd] = result[dInd]

				// setState(newState.filter(group => group.length));
			}
		}
	}

	return (
		<Container className='index-page' margin='20px auto 35px auto'>
			<Helmet>
				<title>Канбан</title>
			</Helmet>
			<DragDropContext onDragEnd={onDragEnd}>
				<TaskColumns columns={columns} />
			</DragDropContext>
		</Container>
	)
}
