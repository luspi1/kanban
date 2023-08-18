import { ErrorMessage } from '@hookform/error-message'
import cn from 'classnames'
import React, { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { type FieldErrors, useController, type UseControllerProps } from 'react-hook-form'
import MaskedInput, { type Mask } from 'react-text-mask'

import styles from './index.module.scss'

type customControlledFieldProps = {
	mask?: Mask | ((value: string) => Mask)
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
				<MaskedInput
					{...props}
					{...field}
					type={props.type}
					className={cn(styles.controlledField, props.className, {
						[styles.isSvg]: props.svg,
					})}
					mask={props.mask ? props.mask : false}
				/>
			</div>
			{props.errors && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={props.errors} name={props.name} />
				</p>
			)}
		</div>
	)
}
