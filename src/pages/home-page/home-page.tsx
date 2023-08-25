import { type FC } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'
import { DragDropContext, type DropResult } from 'react-beautiful-dnd'

import {
	useGetColumnsQuery,
	useGetTasksQuery,
	useReorderTasksMutation,
} from 'src/store/tasks/tasks.api'
import { TitleColumns } from 'src/components/title-columns/title-columns'
import { TasksRow } from 'src/components/tasks-row/tasks-row'
import { TaskCard } from 'src/types/tracks'

export const HomePage: FC = () => {
	const { data: columns, isError: columnsError } = useGetColumnsQuery(null)
	const { data: tasks } = useGetTasksQuery(null)
	const [reorderTasks] = useReorderTasksMutation()
	// const reorder = (list, startIndex, endIndex) => {
	// 	const result = Array.from(list)
	// 	const [removed] = result.splice(startIndex, 1)
	// 	result.splice(endIndex, 0, removed)
	//
	// 	return result
	// }
	const onDragEnd = (result: DropResult) => {
		if (!result.destination) {
			return
		}

		if (result.destination.index === result.source.index) {
			return
		}

		const localTasks = tasks

		const searchedTask = localTasks?.find((el) => el.id === result.draggableId)
		const reorderedTask = {
			...searchedTask,
			column: Number(result.destination.droppableId),
		}
		if (localTasks) {
			const reorderedTasks: TaskCard[] = [...localTasks, reorderedTask]
			console.log(reorderedTasks)
			reorderTasks(reorderedTasks).catch((e) => console.error(e))
		}
	}
	return (
		<Container className='index-page' margin='20px auto 35px auto'>
			<Helmet>
				<title>Канбан</title>
			</Helmet>
			<TitleColumns columns={columns} resError={columnsError} />
			<DragDropContext onDragEnd={onDragEnd}>
				<TasksRow tasks={tasks} colAmount={columns?.length ?? 0} />
			</DragDropContext>
		</Container>
	)
}
