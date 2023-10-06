import styled, { css } from 'styled-components'

type ButtonProps = {
	onClick?: () => void
	className?: string
	padding?: string
	$margin?: string
	width?: string
	$color?: string
	size?: string
	weight?: string
	height?: string
	lineHeight?: string
	$background?: string
	radius?: string
	$border?: string
	disabledState?: boolean
}

export const Button = styled.button<ButtonProps>`
	font-family: 'Open Sans', sans-serif;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: ${({ lineHeight }) => lineHeight ?? '1'};
	font-weight: ${({ weight }) => weight ?? '500'};
	font-size: ${({ size }) => size ?? '15px'};
	padding: ${({ padding }) => padding ?? '7px 15px'};
	margin: ${({ $margin }) => $margin ?? '0'};
	width: ${({ width }) => width ?? 'auto'};
	height: ${({ height }) => height ?? '35px'};
	color: ${({ $color }) => $color ?? '#064AB1'};
	background-color: ${({ $background }) => $background ?? 'none'};
	border-radius: ${({ radius }) => radius ?? '3px'};
	border: ${({ $border }) => $border ?? '1px solid #064AB1'};

	${(props) =>
		props.disabledState &&
		css`
			opacity: 0.5;
			pointer-events: none;
		`};
`
