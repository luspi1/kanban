import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tasksApi } from 'src/store/tasks/tasks.api'
import { NameSpace } from 'src/helpers/consts'
import { tasksReducer } from 'src/store/tasks/tasks.slice'
import { taskFormReducer } from 'src/modules/task-form/store/task-form.slice'

export const store = configureStore({
	reducer: {
		[tasksApi.reducerPath]: tasksApi.reducer,
		[NameSpace.Tasks]: tasksReducer,
		[NameSpace.TaskForm]: taskFormReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tasksApi.middleware),
})

setupListeners(store.dispatch)
