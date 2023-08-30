import { type FC } from 'react'

import styles from './index.module.scss'
import { TasksList } from 'src/components/tasks-list/tasks-list'
import { type KanbanColumn } from 'src/types/tasks'
import { TitleColumns } from 'src/components/title-columns/title-columns'
import { Droppable } from 'react-beautiful-dnd'

type TaskColumnsProps = {
	columns?: KanbanColumn[]
}
export const TaskColumns: FC<TaskColumnsProps> = ({ columns }) => {
	return (
		<>
			<TitleColumns columns={columns} />

			<div className={styles.taskColumns}>
				{columns?.map((column, i) => (
					<Droppable key={column.id} droppableId={column.id}>
						{(provided) => (
							<div
								className={styles.columnItem}
								ref={provided.innerRef}
								{...provided.droppableProps}
							>
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
