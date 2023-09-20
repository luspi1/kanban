import { ErrorMessage } from '@hookform/error-message'
import React, { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { type FieldErrors, useController, type UseControllerProps } from 'react-hook-form'

import styles from './index.module.scss'
import cn from 'classnames'

type customControlledFieldProps = {
	svg?: ReactNode
	errors?: FieldErrors
	type: string
}

type ControlledFieldProps = customControlledFieldProps & HTMLAttributes<HTMLInputElement>

export const ControlledField: FC<UseControllerProps & ControlledFieldProps> = (props) => {
	const { field } = useController(props)

	return (
		<div className={styles.fieldEl}>
			<div className={styles.fieldWrapper}>
				{props.svg}

				<input {...props} {...field} className={cn(styles.controlledField, props.className)} />
			</div>
			{props.errors && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={props.errors} name={props.name} />
				</p>
			)}
		</div>
	)
}
