import React, { type FC, useEffect } from 'react'

import styles from './index.module.scss'
import { DeleteSVG } from 'src/UI/icons/deleteSVG'
import { useController, type UseControllerProps } from 'react-hook-form'
import { calculateCheckboxes } from 'src/helpers/utils'
import { useAppSelector } from 'src/hooks/store'
import { getCheckboxes } from 'src/modules/task-form/store/task-form.selectors'
import { useActions } from 'src/hooks/actions/actions'
import { CheckboxAdditional } from 'src/components/checkbox-list/components/checkbox-additional/checkbox-additional'

type CheckboxListProps = {
	title?: string
}
export const CheckboxList: FC<CheckboxListProps & UseControllerProps> = (props) => {
	const checkboxes = useAppSelector(getCheckboxes)
	const { removeCheckboxById, changeCheckboxById } = useActions()

	const { field } = useController(props)

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
			<CheckboxAdditional />
		</div>
	)
}
