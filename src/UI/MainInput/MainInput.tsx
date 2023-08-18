import React, {
	type ChangeEventHandler,
	type FC,
	type HTMLInputTypeAttribute,
	type ReactNode,
} from 'react'
import { useController, type UseControllerProps } from 'react-hook-form'
import MaskedInput, { type Mask } from 'react-text-mask'
import styled, { css } from 'styled-components'
import styles from './index.module.scss'

type MainInputProps = {
	type: HTMLInputTypeAttribute
	mask?: Mask | ((value: string) => Mask)
	value?: string | number
	name?: string
	svg?: ReactNode
	innerRef: (inputElement: HTMLElement) => void
	placeholder?: string
	onInput?: () => void
	onChange?: ChangeEventHandler<HTMLInputElement>
	onBlur?: () => void
	className?: string
	padding?: string
	margin?: string
	width?: string
	color?: string
	fontSize?: string
	weight?: string
	lineHeight?: string
	background?: string
	radius?: string
	border?: string
	outline?: string
	disabledState?: boolean
}

const StyledMainInput = styled.input<MainInputProps>`
	font-family: 'Montserrat', sans-serif;
	line-height: ${({ lineHeight }) => lineHeight ?? '20px'};
	font-weight: ${({ weight }) => weight ?? '500'};
	font-size: ${({ fontSize }) => fontSize ?? '14px'};
	padding: ${({ padding }) => padding ?? '10px 10px 10px 20px'};
	margin: ${({ margin }) => margin ?? '0'};
	width: ${({ width }) => width ?? '100%'};
	color: ${({ color }) => color ?? '#3D3D3D;'};
	background-color: ${({ background }) => background ?? '#ffffff'};
	border-radius: ${({ radius }) => radius ?? '3px'};
	border: ${({ border }) => border ?? 'none'};
	outline: ${({ outline }) => outline ?? 'none'};

	${(props) =>
		props.disabledState &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`};
`

export const MainInput: FC<MainInputProps & UseControllerProps> = (props) => {
	const { field } = useController(props)

	if (props.svg) {
		return (
			<div className={styles.mainInputWrapper}>
				{props.svg}
				<MaskedInput
					mask={props.mask ?? []}
					{...field}
					render={(ref, props) => <StyledMainInput type='text' innerRef={ref} {...props} />}
				/>
			</div>
		)
	}

	return (
		<MaskedInput
			mask={props.mask ?? []}
			render={(ref, props) => <StyledMainInput innerRef={ref} {...props} />}
		/>
	)
}
