import { type FC } from 'react'

import styles from './index.module.scss'
import { type TaskStatus } from 'src/types/tracks'
import { TaskStatusMap } from 'src/helpers/consts'
import cnBind from 'classnames/bind'
import { SettingsSvg } from 'src/UI/icons/settingsSVG'

type TaskCardProps = {
	title: string
	status: TaskStatus
}

const cx = cnBind.bind(styles)
export const TaskItem: FC<TaskCardProps> = ({ title, status }) => {
	const taskClasses = cx('taskCard', status)

	return (
		<div className={taskClasses}>
			<div className={styles.taskTop}>
				<span className={styles.taskStatus}>{TaskStatusMap[status]}</span>
				<button type='button'>
					<SettingsSvg />
				</button>
			</div>
			<h4>{title}</h4>
		</div>
	)
}
