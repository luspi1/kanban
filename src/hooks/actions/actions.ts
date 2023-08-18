import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { loginActions } from 'src/modules/LoginModal/store/login-slice/login.slice'

const actions = {
	...loginActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
