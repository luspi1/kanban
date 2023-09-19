import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'

type TaskFormState = {
	currentTaskId: string | null
	activityForm: boolean
}

const initialState: TaskFormState = {
	currentTaskId: null,
	activityForm: false,
}

export const taskFormSlice = createSlice({
	name: NameSpace.TaskForm,
	initialState,
	reducers: {
		setCurrentTaskId: (state, action: PayloadAction<string>) => {
			state.currentTaskId = action.payload
			state.activityForm = true
		},
	},
})
export const taskFormActions = taskFormSlice.actions
export const taskFormReducer = taskFormSlice.reducer
