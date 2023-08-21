import { type FC } from 'react'
import { type TaskCard } from 'src/types/tracks'

import styles from './index.module.scss'

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
					{tasks.map((task) => {
						if (Number(task.column) === i + 1) {
							return <div key={task.id}>{task.title}</div>
						}
						return null
					})}
				</div>
			))}
		</div>
	)
}
