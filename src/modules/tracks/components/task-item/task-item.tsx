import { type FC } from 'react'

import styles from './index.module.scss'
import { TaskPriorityMap } from 'src/helpers/consts'
import cnBind from 'classnames/bind'
import {
	Draggable,
	type DraggableStateSnapshot,
	type DraggingStyle,
	type NotDraggingStyle,
} from 'react-beautiful-dnd'
import { type TaskPriority } from 'src/types/tasks'
import { useActions } from 'src/hooks/actions/actions'
import { ExecutorSvg } from 'src/UI/icons/executorSVG'
import { CommentSvg } from 'src/UI/icons/commentSVG'
import { CalendarSvg } from 'src/UI/icons/calendarSVG'
import { CheckProgressSvg } from 'src/UI/icons/checkProgressSVG'
import { type CheckboxItem } from 'src/types/checkbox'
import { calculateCheckboxes, calculateCheckboxesPercent } from 'src/helpers/utils'

type TaskCardProps = {
	id: string
	title: string
	priority: TaskPriority
	index: number
	desc: string
	executor: string
	checkboxes: CheckboxItem[] | []
}

const cx = cnBind.bind(styles)
export const TaskItem: FC<TaskCardProps> = ({
	title,
	priority,
	id,
	index,
	desc,
	executor,
	checkboxes,
}) => {
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

	const taskClasses = cx('taskCard', priority)
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
						<span className={styles.taskPriority}>{TaskPriorityMap[priority]}</span>
					</div>
					<h4>{title}</h4>
					<p className={styles.taskDesc}>{desc}</p>
					<div className={styles.taskExecutor}>
						<p>
							<ExecutorSvg />
							{executor}
						</p>
						<span>
							<CommentSvg />
							22
						</span>
					</div>
					<p className={styles.taskDate}>
						<CalendarSvg />
						<span>22.03.2023 - 25.04.2023</span>
					</p>
					<div className={styles.taskProgress}>
						<p>
							<CheckProgressSvg />
							<span>{calculateCheckboxes(checkboxes)}</span>/<span>{checkboxes.length}</span>
						</p>
						<p>
							<span>{calculateCheckboxesPercent(checkboxes)}</span>%
						</p>
					</div>
				</div>
			)}
		</Draggable>
	)
}
