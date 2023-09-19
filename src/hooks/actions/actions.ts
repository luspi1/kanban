import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { tasksActions } from 'src/store/tasks/tasks.slice'
import { taskFormActions } from 'src/store/task-form/task-form.slice'

const actions = {
	...tasksActions,
	...taskFormActions,
}
export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
