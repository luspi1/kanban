import { Modal } from 'src/components/Modal/Modal'

import styles from './index.module.scss'
import { Button } from 'src/UI/Button'
import { useActions } from 'src/hooks/actions/actions'
import { useAppSelector } from 'src/hooks/store'
import {
	getActivityArchiveModal,
	getCurrentTaskId,
} from 'src/modules/task-form/store/task-form.selectors'
import { useDeleteTaskByIdMutation } from 'src/store/archive/archive.api'

export const ArchiveConfirm = () => {
	const { toggleArchiveModal, changeActivity } = useActions()

	const activityModal = useAppSelector(getActivityArchiveModal)
	const taskId = useAppSelector(getCurrentTaskId)
	const [deleteTaskById] = useDeleteTaskByIdMutation()

	const deleteTask = () => {
		deleteTaskById(String(taskId))
			.then(() => {
				toggleArchiveModal(false)
				changeActivity()
			})
			.catch((e) => console.error(e))
	}
	return (
		<Modal
			className={styles.archiveConfirmModal}
			active={activityModal}
			setActive={toggleArchiveModal}
		>
			<h3>Вы действительно хотите перенести задачу в архив?</h3>
			<div className={styles.archiveConfirmBtns}>
				<Button onClick={() => deleteTask()}>Подтвердить</Button>
				<Button
					$color='#ff0000'
					$border='1px solid #ff0000'
					onClick={() => toggleArchiveModal(false)}
				>
					Отмена
				</Button>
			</div>
		</Modal>
	)
}
