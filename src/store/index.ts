import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { tasksApi } from 'src/store/tasks/tasks.api'

export const store = configureStore({
	reducer: {
		[tasksApi.reducerPath]: tasksApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tasksApi.middleware),
})

setupListeners(store.dispatch)
