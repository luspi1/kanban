import { type FC } from 'react'
import { type TaskCard } from 'src/types/tracks'

import styles from './index.module.scss'
import { TasksList } from 'src/components/tasks-list/tasks-list'

type TasksRowProps = {
	tasks: TaskCard[]
	colAmount: number
}
export const TasksRow: FC<TasksRowProps> = ({ tasks, colAmount }) => {
	const columnsArr = new Array(colAmount).fill('')
	return (
		<div className={styles.tasksRow}>
			{columnsArr.map((column, i) => (
				<div className={styles.taskCol} key={i} style={{ width: `${100 / colAmount}%` }}>
					<TasksList tasks={tasks} colNumber={i + 1} />
				</div>
			))}
		</div>
	)
}
