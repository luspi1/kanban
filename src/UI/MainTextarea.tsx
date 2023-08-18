import { type FC, type PropsWithChildren, type RefCallback } from 'react'
import styled, { css } from 'styled-components'

type MainTextareaProps = PropsWithChildren<{
	value?: string | number
	name?: string
	inputRef?: RefCallback<string>
	placeholder?: string
	onInput?: () => void
	onChange?: () => void
	onBlur?: () => void
	className?: string
	padding?: string
	margin?: string
	width?: string
	height?: string
	color?: string
	fontSize?: string
	weight?: string
	lineHeight?: string
	background?: string
	radius?: string
	border?: string
	outline?: string
	disabledState?: boolean
}>

const StyledMainTextarea = styled.textarea<MainTextareaProps>`
	font-family: 'Montserrat', sans-serif;
	line-height: ${({ lineHeight }) => lineHeight ?? '20px'};
	font-weight: ${({ weight }) => weight ?? '500'};
	font-size: ${({ fontSize }) => fontSize ?? '14px'};
	padding: ${({ padding }) => padding ?? '10px 10px 10px 20px'};
	margin: ${({ margin }) => margin ?? '0'};
	width: ${({ width }) => width ?? '100%'};
	height: ${({ height }) => height ?? '70px'};
	color: ${({ color }) => color ?? '#3D3D3D;'};
	background-color: ${({ background }) => background ?? '#ffffff'};
	border-radius: ${({ radius }) => radius ?? '3px'};
	border: ${({ border }) => border ?? 'none'};
	outline: ${({ outline }) => outline ?? 'none'};
	resize: ${'none'};

	${(props) =>
		props.disabledState &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`};
`

export const MainTextarea: FC<MainTextareaProps> = (props) => {
	return <StyledMainTextarea {...props}>{props.children}</StyledMainTextarea>
}
