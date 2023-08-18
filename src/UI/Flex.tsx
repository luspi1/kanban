import { type FC, type PropsWithChildren } from 'react'
import styled from 'styled-components'

type ContainerFlex = PropsWithChildren<{
	direction?: string
	align?: string
	justify?: string
	margin?: string
}>

const StyledFlex = styled.div<ContainerFlex>`
	display: flex;
	flex-direction: ${({ direction }) => direction ?? 'row'};
	align-items: ${({ align }) => align ?? 'stretch'};
	justify-content: ${({ justify }) => justify ?? 'stretch'};
	margin: ${({ margin }) => margin ?? '0'};
`
export const Flex: FC<ContainerFlex> = (props) => {
	return <StyledFlex {...props} />
}
