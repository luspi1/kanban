import { type FC } from 'react'

import styles from './index.module.scss'
import { TasksList } from 'src/modules/tracks/components/tasks-list/tasks-list'
import { type KanbanColumn } from 'src/types/tasks'
import { Droppable } from 'react-beautiful-dnd'

type TaskColumnsProps = {
	columns?: KanbanColumn[]
}
export const TaskColumns: FC<TaskColumnsProps> = ({ columns }) => {
	return (
		<>
			<div className={styles.taskColumns}>
				{columns?.map((column) => (
					<Droppable key={column.id} droppableId={column.id}>
						{(provided) => (
							<div className='col-item' ref={provided.innerRef} {...provided.droppableProps}>
								<TasksList tasks={column.tasks} />
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				))}
			</div>
		</>
	)
}
