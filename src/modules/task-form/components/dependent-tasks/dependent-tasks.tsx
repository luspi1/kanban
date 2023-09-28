import { type FC } from 'react'
import { type TaskCard } from 'src/types/tasks'
import styles from './index.module.scss'
import { useActions } from 'src/hooks/actions/actions'

type DependentTasksProps = {
	currentTask: TaskCard
}
export const DependentTasks: FC<DependentTasksProps> = ({ currentTask }) => {
	const { setCurrentTaskId } = useActions()

	return (
		<div className={styles.dependentTasks}>
			<p>
				Родительская задача:{' '}
				{currentTask.parentTask ? (
					<span onClick={() => setCurrentTaskId(currentTask.parentTask?.id ?? '0')}>
						{currentTask.parentTask?.title}
					</span>
				) : (
					'не установлена'
				)}
			</p>
			<p>
				Зависимые задачи ({currentTask.dependencyTask.length}):{' '}
				{currentTask.dependencyTask
					? currentTask.dependencyTask.map((el) => (
							<span key={el.id} onClick={() => setCurrentTaskId(el.id ?? '0')}>
								{el.title}
							</span>
					  ))
					: 'нет зависимых задач'}
			</p>
		</div>
	)
}
