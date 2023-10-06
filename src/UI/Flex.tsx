import styled from 'styled-components'

type ContainerFlex = {
	$direction?: string
	$align?: string
	$justify?: string
	$margin?: string
}

export const Flex = styled.div<ContainerFlex>`
	display: flex;
	flex-direction: ${({ $direction }) => $direction ?? 'row'};
	align-items: ${({ $align }) => $align ?? 'stretch'};
	justify-content: ${({ $justify }) => $justify ?? 'stretch'};
	margin: ${({ $margin }) => $margin ?? '0'};
`
