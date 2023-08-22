import { type FC } from 'react'
import { type TaskCard } from 'src/types/tracks'
import { TaskItem } from 'src/components/task-item/task-item'

type TasksListProps = {
	tasks?: TaskCard[]
	colNumber: number
}
export const TasksList: FC<TasksListProps> = ({ tasks, colNumber }) => {
	return (
		<>
			{tasks?.map((task) => {
				if (task.column === colNumber) {
					return <TaskItem key={task.id} {...task} />
				}
				return null
			})}
		</>
	)
}
