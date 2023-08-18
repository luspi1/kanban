import { type FC, type PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'

type ButtonProps = PropsWithChildren<{
	type?: 'button' | 'submit' | 'reset' | undefined
	onClick?: () => void
	className?: string
	padding?: string
	margin?: string
	width?: string
	color?: string
	size?: string
	weight?: string
	lineHeight?: string
	background?: string
	radius?: string
	border?: string
	disabledState?: boolean
}>

const StyledButton = styled.button<ButtonProps>`
	font-family: 'Montserrat', sans-serif;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: ${({ lineHeight }) => lineHeight ?? '20px'};
	font-weight: ${({ weight }) => weight ?? '700'};
	font-size: ${({ size }) => size ?? '14px'};
	padding: ${({ padding }) => padding ?? '12px 22px'};
	margin: ${({ margin }) => margin ?? '0'};
	width: ${({ width }) => width ?? 'auto'};
	color: ${({ color }) => color ?? '#ffffff'};
	background-color: ${({ background }) => background ?? '#337390'};
	border-radius: ${({ radius }) => radius ?? '3px'};
	border: ${({ border }) => border ?? '1px solid #337390'};

	${(props) =>
		props.disabledState &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`};
`
export const Button: FC<ButtonProps> = (props) => {
	return <StyledButton {...props} />
}
