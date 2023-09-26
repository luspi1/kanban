import React, { type FC, useEffect, useRef, useState } from 'react'

import styles from './index.module.scss'
import { Button } from 'src/UI/Button'
import { DeleteSVG } from 'src/UI/icons/deleteSVG'
import { useController, type UseControllerProps } from 'react-hook-form'
import { calculateCheckboxes } from 'src/helpers/utils'
import { useAppSelector } from 'src/hooks/store'
import { getCheckboxes } from 'src/modules/task-form/store/task-form.selectors'
import { useActions } from 'src/hooks/actions/actions'

type CheckboxListProps = {
	title?: string
}
export const CheckboxList: FC<CheckboxListProps & UseControllerProps> = (props) => {
	// const [checkboxes, setCheckboxes] = useState<CheckboxItem[] | []>(props.checkboxData ?? [])

	const checkboxes = useAppSelector(getCheckboxes)
	const { removeCheckboxById, addCheckbox, changeCheckboxById } = useActions()

	const [isVisibleAddition, setIsVisibleAddition] = useState<boolean>(false)
	const addCheckboxBtnRef = useRef<HTMLTextAreaElement>(null)

	const { field } = useController(props)

	const addCheckboxHandler = () => {
		const inputAdditional = addCheckboxBtnRef.current

		if (!inputAdditional?.value) {
			return
		}

		addCheckbox(inputAdditional.value)

		if (inputAdditional) {
			inputAdditional.value = ''
		}
	}

	useEffect(() => {
		field.onChange(checkboxes)
	}, [checkboxes])

	return (
		<div className={styles.checkboxList}>
			<h5>
				{props.title ?? 'Чек-лист'} ({calculateCheckboxes(checkboxes)} / {checkboxes.length})
			</h5>
			<ul>
				{checkboxes ? (
					checkboxes.map((checkboxItem, index) => (
						<li key={checkboxItem.id}>
							<label>
								<input
									type='checkbox'
									onChange={() => changeCheckboxById(checkboxItem.id)}
									checked={checkboxes[index].checked}
									value={checkboxes[index].title}
								/>
								<span>{checkboxItem.title}</span>
							</label>
							<button type='button' onClick={() => removeCheckboxById(checkboxItem.id)}>
								<DeleteSVG />
							</button>
						</li>
					))
				) : (
					<li className={styles.noItemsDesc}>Нет добавленных пунктов</li>
				)}
			</ul>
			{isVisibleAddition ? (
				<div className={styles.additionBlock}>
					<textarea placeholder='Добавить еще один пункт' ref={addCheckboxBtnRef} />
					<div className={styles.additionalControllers}>
						<Button
							color='#00754A'
							$border='1px solid #00754A'
							type='button'
							onClick={addCheckboxHandler}
						>
							Добавить
						</Button>
						<Button
							color='#920303'
							$border='1px solid #920303'
							onClick={() => setIsVisibleAddition(!isVisibleAddition)}
							type='button'
						>
							Отмена
						</Button>
					</div>
				</div>
			) : (
				<Button onClick={() => setIsVisibleAddition(!isVisibleAddition)}>Добавить пункт</Button>
			)}
		</div>
	)
}
