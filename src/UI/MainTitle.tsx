import { type FC, type PropsWithChildren } from 'react'
import styled from 'styled-components'

type MainTitleProps = PropsWithChildren<{
	padding?: string
}>

const StyledMainTitle = styled.div<MainTitleProps>`
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
	font-size: 26px;
	line-height: 32px;
	color: #000000;
	padding: ${({ padding }) => padding ?? '38px 0 32px'};
`
export const MainTitle: FC<MainTitleProps> = (props) => {
	return <StyledMainTitle {...props} />
}
