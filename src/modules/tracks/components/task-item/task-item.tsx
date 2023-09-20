import { type FC } from 'react'

import styles from './index.module.scss'
import { TaskStatusMap } from 'src/helpers/consts'
import cnBind from 'classnames/bind'
import { SettingsSvg } from 'src/UI/icons/settingsSVG'
import {
	Draggable,
	type DraggableStateSnapshot,
	type DraggingStyle,
	type NotDraggingStyle,
} from 'react-beautiful-dnd'
import { type TaskStatus } from 'src/types/tasks'
import { useActions } from 'src/hooks/actions/actions'

type TaskCardProps = {
	id: string
	title: string
	status: TaskStatus
	index: number
	desc: string
}

const cx = cnBind.bind(styles)
export const TaskItem: FC<TaskCardProps> = ({ title, status, id, index, desc }) => {
	const { setCurrentTaskId } = useActions()
	const getStyle = (
		style: DraggingStyle | NotDraggingStyle | undefined,
		snapshot: DraggableStateSnapshot
	) => {
		if (!snapshot.isDropAnimating) {
			return style
		}
		return {
			...style,
			transitionDuration: `0.00000001s`,
		}
	}

	const taskClasses = cx('taskCard', status)
	return (
		<Draggable draggableId={id} index={index}>
			{(provided, snapshot) => (
				<div
					className={taskClasses}
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					style={getStyle(provided.draggableProps.style, snapshot)}
					onClick={() => setCurrentTaskId(id)}
				>
					<div className={styles.taskTop}>
						<span className={styles.taskStatus}>{TaskStatusMap[status]}</span>
						<button type='button'>
							<SettingsSvg />
						</button>
					</div>
					<h4>{title}</h4>
					<p>{desc}</p>
				</div>
			)}
		</Draggable>
	)
}
