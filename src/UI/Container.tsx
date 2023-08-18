import { type FC, type PropsWithChildren } from 'react'
import styled from 'styled-components'

type ContainerProps = PropsWithChildren<{
	padding?: string
	width?: string
	margin?: string
	className?: string
}>

const StyledContainer = styled.div<ContainerProps>`
	max-width: ${({ width }) => width ?? '1270px'};
	padding: ${({ padding }) => padding ?? '0 15px'};
	margin: ${({ margin }) => margin ?? '0 auto'};
`
export const Container: FC<ContainerProps> = (props) => {
	return <StyledContainer {...props} />
}
