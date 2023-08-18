import { type FC, type PropsWithChildren } from 'react'
import styled from 'styled-components'

type TypographyProps = PropsWithChildren<{
	padding?: string
	margin?: string
	color?: string
	align?: string
	size?: string
	weight?: string
	lineHeight?: string
}>

const StyledTypography = styled.p<TypographyProps>`
	font-family: 'Montserrat', sans-serif;
	line-height: ${({ lineHeight }) => lineHeight ?? '20px'};
	font-weight: ${({ weight }) => weight ?? '400'};
	font-size: ${({ size }) => size ?? '14px'};
	text-align: ${({ align }) => align ?? 'left'};
	color: ${({ color }) => color ?? '#3d3d3d'};
	padding: ${({ padding }) => padding ?? '0'};
	margin: ${({ margin }) => margin ?? '0'};
`
export const Typography: FC<TypographyProps> = (props) => {
	return <StyledTypography {...props} />
}
