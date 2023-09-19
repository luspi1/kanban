import { type FC } from 'react'

import styles from './index.module.scss'
import { useGetTaskByIdQuery } from 'src/store/tasks/tasks.api'
import { TaskStatusMap } from 'src/helpers/consts'

export const TaskForm: FC = () => {
	const { data: currentTask } = useGetTaskByIdQuery('7')
	if (!currentTask) {
		return (
			<div className={styles.taskForm}>
				<h4>Задача не найдена</h4>
			</div>
		)
	}
	return (
		<div className={styles.taskForm}>
			<h4>{currentTask.title}</h4>
			<p>{TaskStatusMap[currentTask.status]}</p>
		</div>
	)
}
