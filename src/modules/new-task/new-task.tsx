import React, { type FC, useEffect, useRef, useState } from 'react'

import { PlusSvg } from 'src/UI/icons/plusSVG'
import styles from './index.module.scss'
import { CrossSvg } from 'src/UI/icons/crossSVG'
import { useAddTaskItemMutation } from 'src/store/tasks/tasks.api'

type NewTaskProps = {
	colId: string
}
export const NewTask: FC<NewTaskProps> = ({ colId }) => {
	const [addTaskItem] = useAddTaskItemMutation()

	const [isShowForm, setIsShowForm] = useState<boolean>(false)
	const newTaskRef = useRef<HTMLDivElement>(null)

	const newTaskInputRef = useRef<HTMLTextAreaElement>(null)

	const handleAddNewTask = () => {
		const newTaskInput = newTaskInputRef.current
		if (newTaskInput && newTaskInput.value.length < 3) {
			return
		}
		addTaskItem({
			columnId: colId,
			title: newTaskInput?.value,
		})
			.then(() => setIsShowForm(false))
			.catch((e) => console.error(e))
	}

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (newTaskRef.current && !e.composedPath().includes(newTaskRef.current)) {
				setIsShowForm(false)
			}
		}
		document.body.addEventListener('click', handleClickOutside)
		return () => document.body.removeEventListener('click', handleClickOutside)
	}, [])
	return (
		<div className={styles.newTaskWrapper} ref={newTaskRef}>
			{isShowForm ? (
				<div className={styles.newTaskForm}>
					<textarea
						placeholder='Введите заголовок для новой карточки'
						ref={newTaskInputRef}
					></textarea>
					<div className={styles.bottomBtns}>
						<button className={styles.addBtn} onClick={handleAddNewTask}>
							Добавить
						</button>
						<button className={styles.closeBtn} type='button' onClick={() => setIsShowForm(false)}>
							<CrossSvg />
						</button>
					</div>
				</div>
			) : (
				<button className={styles.showBtn} type='button' onClick={() => setIsShowForm(!isShowForm)}>
					<PlusSvg /> Добавить карточку
				</button>
			)}
		</div>
	)
}
