import { type FC } from 'react'
import { type TaskCard } from 'src/types/tasks'
import { TaskItem } from 'src/modules/tracks/components/task-item/task-item'

import styles from './index.module.scss'

type TasksListProps = {
	tasks?: TaskCard[]
}
export const TasksList: FC<TasksListProps> = ({ tasks }) => {
	return (
		<div className={styles.colTask}>
			{tasks?.map((task, idx) => (
				<TaskItem key={task.id} index={idx} {...task} />
			))}
		</div>
	)
}
