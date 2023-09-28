import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type TaskCard } from 'src/types/tasks'

type TasksSliceState = {
	tasks: TaskCard[]
}

const initialState: TasksSliceState = {
	tasks: [],
}

export const tasksSlice = createSlice({
	name: NameSpace.Tasks,
	initialState,
	reducers: {
		setAllTasks: (state, action: PayloadAction<TaskCard[]>) => {
			state.tasks = action.payload
		},
	},
})
export const tasksActions = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
