import React, { type FC, useEffect, useRef, useState } from 'react'
import { type CheckboxItem } from 'src/types/checkbox'

import styles from './index.module.scss'
import { Button } from 'src/UI/Button'
import { uid } from 'react-uid'
import { DeleteSVG } from 'src/UI/icons/deleteSVG'
import { useController, type UseControllerProps } from 'react-hook-form'

type CheckboxListProps = {
	title?: string
	checkboxData: CheckboxItem[] | []
}
export const CheckboxList: FC<CheckboxListProps & UseControllerProps> = (props) => {
	const [checkboxes, setCheckboxes] = useState<CheckboxItem[] | []>(props.checkboxData ?? [])
	const [isVisibleAddition, setIsVisibleAddition] = useState<boolean>(false)
	const addCheckboxBtnRef = useRef<HTMLTextAreaElement>(null)

	const { field } = useController(props)

	const handleCheckboxValue = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
		const currentCheckbox = checkboxes.find((el) => el.id === id) as CheckboxItem
		const filteredCheckboxes = checkboxes.filter((el) => el.id !== id)

		const newCheckboxes = [
			...filteredCheckboxes,
			{
				...currentCheckbox,
				checked: !currentCheckbox.checked,
			},
		]

		setCheckboxes(newCheckboxes)
		field.onChange(newCheckboxes)
	}

	const addCheckbox = () => {
		const inputAdditional = addCheckboxBtnRef.current
		const currentIndex = checkboxes?.length

		if (!inputAdditional?.value) {
			return
		}

		const newCheckbox = {
			id: uid(inputAdditional?.value, currentIndex),
			title: inputAdditional?.value ?? '',
			checked: false,
		}

		if (checkboxes) {
			setCheckboxes([...checkboxes, { ...newCheckbox }])
		} else {
			setCheckboxes([{ ...newCheckbox }])
		}

		const copyNewCheckboxes = [...checkboxes, { ...newCheckbox }]
		field.onChange(copyNewCheckboxes)

		if (inputAdditional) {
			inputAdditional.value = ''
		}
	}
	const removeCheckbox = (id: string) => {
		const newCheckboxes = checkboxes.filter((el) => el.id !== id)
		setCheckboxes(newCheckboxes)
		field.onChange(newCheckboxes)
	}

	useEffect(() => {
		setCheckboxes(props.checkboxData)
	}, [props.checkboxData])

	return (
		<div className={styles.checkboxList}>
			<h5>{props.title ?? 'Чек-лист'}</h5>
			<ul>
				{checkboxes ? (
					checkboxes.map((checkboxItem, index) => (
						<li key={checkboxItem.id}>
							<label>
								<input
									type='checkbox'
									onChange={(e) => handleCheckboxValue(e, checkboxItem.id)}
									checked={checkboxes[index].checked}
									value={checkboxes[index].title}
								/>
								<span>{checkboxItem.title}</span>
							</label>
							<button type='button' onClick={() => removeCheckbox(checkboxItem.id)}>
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
						<Button color='#00754A' $border='1px solid #00754A' type='button' onClick={addCheckbox}>
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
