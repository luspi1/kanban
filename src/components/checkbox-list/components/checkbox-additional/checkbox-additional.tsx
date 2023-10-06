import React, { type FC, useRef, useState } from 'react'
import { Button } from 'src/UI/Button'
import { useActions } from 'src/hooks/actions/actions'

import styles from './index.module.scss'

export const CheckboxAdditional: FC = () => {
	const [isVisibleAddition, setIsVisibleAddition] = useState<boolean>(false)
	const addCheckboxBtnRef = useRef<HTMLTextAreaElement>(null)
	const { addCheckbox } = useActions()
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

	return isVisibleAddition ? (
		<div className={styles.additionalBlock}>
			<textarea placeholder='Добавить еще один пункт' ref={addCheckboxBtnRef} />
			<div className={styles.additionalControllers}>
				<Button
					$color='#00754A'
					$border='1px solid #00754A'
					type='button'
					onClick={addCheckboxHandler}
				>
					Добавить
				</Button>
				<Button
					$color='#920303'
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
	)
}
