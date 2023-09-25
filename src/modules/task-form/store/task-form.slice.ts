import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type CheckboxItem } from 'src/types/checkbox'

type TaskFormState = {
	currentTaskId: string | null
	activityForm: boolean
	checkboxes: CheckboxItem[] | []
}

const initialState: TaskFormState = {
	currentTaskId: null,
	activityForm: false,
	checkboxes: [],
}

export const taskFormSlice = createSlice({
	name: NameSpace.TaskForm,
	initialState,
	reducers: {
		setCurrentTaskId: (state, action: PayloadAction<string>) => {
			state.currentTaskId = action.payload
			state.activityForm = true
		},
		changeActivity: (state) => {
			state.activityForm = false
		},
	},
})
export const taskFormActions = taskFormSlice.actions
export const taskFormReducer = taskFormSlice.reducer
