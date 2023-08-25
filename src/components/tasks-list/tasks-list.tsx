import { type FC } from 'react'
import { type TaskCard } from 'src/types/tracks'
import { TaskItem } from 'src/components/task-item/task-item'
import { Droppable } from 'react-beautiful-dnd'

type TasksListProps = {
	tasks?: TaskCard[]
	colNumber: number
}
export const TasksList: FC<TasksListProps> = ({ tasks, colNumber }) => {
	let customIndex = 0
	return (
		<>
			<Droppable droppableId={String(colNumber)}>
				{(provided) => (
					<div ref={provided.innerRef} {...provided.droppableProps}>
						{tasks?.map((task) => {
							if (task.column === colNumber) {
								customIndex++
								return <TaskItem key={task.id} index={customIndex} {...task} />
							}
							return null
						})}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</>
	)
}
