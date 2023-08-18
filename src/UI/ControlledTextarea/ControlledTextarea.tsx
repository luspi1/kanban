import { ErrorMessage } from '@hookform/error-message'
import cn from 'classnames'
import React, { type FC, type HTMLAttributes, type ReactNode } from 'react'
import { type FieldErrors, useController, type UseControllerProps } from 'react-hook-form'
import styles from './index.module.scss'

type customControlledTextareaProps = {
	errors?: FieldErrors
	svg?: ReactNode
}

type ControlledTextareaProps = customControlledTextareaProps & HTMLAttributes<HTMLTextAreaElement>

export const ControlledTextarea: FC<UseControllerProps & ControlledTextareaProps> = (props) => {
	const { field } = useController(props)
	return (
		<div className={styles.fieldEl}>
			<div className={styles.fieldWrapper}>
				{props.svg}
				<textarea
					{...props}
					{...field}
					className={cn(styles.controlledTextarea, props.className, {
						[styles.isSvg]: props.svg,
					})}
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
