import { type FC } from 'react'

import styles from './index.module.scss'
import { type TaskStatus } from 'src/types/tracks'
import { TaskStatusMap } from 'src/helpers/consts'
import cnBind from 'classnames/bind'
import { SettingsSvg } from 'src/UI/icons/settingsSVG'
import { Draggable } from 'react-beautiful-dnd'

type TaskCardProps = {
	id: string
	title: string
	status: TaskStatus
	index: number
}

const cx = cnBind.bind(styles)
export const TaskItem: FC<TaskCardProps> = ({ title, status, id, index }) => {
	const taskClasses = cx('taskCard', status)
	return (
		<Draggable draggableId={id} index={index}>
			{(provided) => (
				<div
					className={taskClasses}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<div className={styles.taskTop}>
						<span className={styles.taskStatus}>{TaskStatusMap[status]}</span>
						<button type='button'>
							<SettingsSvg />
						</button>
					</div>
					<h4>{title}</h4>
				</div>
			)}
		</Draggable>
	)
}
