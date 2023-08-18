import { type FC } from 'react'
import styled from 'styled-components'

type ErrorWarningProps = {
	errorText?: string
}

const StyledWarning = styled.p`
	padding: 10px 0;
	color: #ff4e4e !important;
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	font-size: 16px;
	line-height: 20px;
`
export const ErrorWarning: FC<ErrorWarningProps> = ({ errorText }) => {
	if (!errorText) {
		return null
	}
	return <StyledWarning>{errorText}</StyledWarning>
}
