import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type CheckboxItem } from 'src/types/checkbox'
import { uid } from 'react-uid'

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
		setCheckboxes: (state, action: PayloadAction<CheckboxItem[]>) => {
			state.checkboxes = action.payload
		},

		addCheckbox: (state, action: PayloadAction<string>) => {
			const currentIndex = state.checkboxes.length
			const newCheckbox: CheckboxItem = {
				id: uid(action.payload, currentIndex),
				title: action.payload ?? '',
				checked: false,
			}
			state.checkboxes = [...state.checkboxes, newCheckbox]
		},
		changeCheckboxById: (state, action: PayloadAction<string>) => {
			const currentCheckbox = state.checkboxes.find((el) => el.id === action.payload)
			const filteredCheckboxes = state.checkboxes.filter((el) => el.id !== action.payload)
			if (currentCheckbox) {
				currentCheckbox.checked = !currentCheckbox.checked
				state.checkboxes = [...filteredCheckboxes, currentCheckbox]
			}
		},
		removeCheckboxById: (state, action: PayloadAction<string>) => {
			state.checkboxes = state.checkboxes.filter((el) => el.id !== action.payload)
		},
	},
})
export const taskFormActions = taskFormSlice.actions
export const taskFormReducer = taskFormSlice.reducer
