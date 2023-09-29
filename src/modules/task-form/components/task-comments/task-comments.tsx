import { type FC, useRef } from 'react'
import { type TaskCard } from 'src/types/tasks'

import styles from './index.module.scss'
import { formatDate } from 'src/helpers/utils'
import { SendSvg } from 'src/UI/icons/sendSVG'
import { uid } from 'react-uid'
import { useSetTaskItemMutation } from 'src/store/tasks/tasks.api'

type TaskCommentsProps = {
	currentTask: TaskCard
}

export const TaskComments: FC<TaskCommentsProps> = ({ currentTask }) => {
	const [setTaskItem] = useSetTaskItemMutation()
	const commentInputRef = useRef<HTMLTextAreaElement>(null)
	const handleAddComment = () => {
		const commentInput = commentInputRef.current
		if (!commentInput?.value) {
			return
		}

		const nowDate = new Date()

		const newComment = {
			id: uid(nowDate),
			time: nowDate,
			user: {
				id: '20u',
				name: 'Иван И.',
			},
			text: commentInput.value,
		}

		const newTask: TaskCard = {
			...currentTask,
			comments: [...currentTask.comments, newComment],
		}

		setTaskItem(newTask).catch((e) => console.error(e))

		commentInput.value = ''
	}
	return (
		<div className={styles.taskComments}>
			<h6>Комментарии:</h6>
			<ul className={styles.commentsList}>
				{currentTask?.comments.map((comment) => (
					<li key={comment.id}>
						<div>
							<h5>{comment.user.name}</h5>
							<p>{comment.text}</p>
						</div>
						<span>
							{formatDate(comment?.time, {
								year: 'numeric',
								month: 'long',
								day: 'numeric',
								hour: 'numeric',
								minute: 'numeric',
							})}
						</span>
					</li>
				))}
			</ul>
			<div className={styles.commentInput}>
				<textarea placeholder='Напишите комментарий' ref={commentInputRef} />
				<button type='button' onClick={handleAddComment}>
					<SendSvg />
				</button>
			</div>
		</div>
	)
}
