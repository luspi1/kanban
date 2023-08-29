import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type KanbanColumn } from 'src/types/tasks'

export const tasksApi = createApi({
	reducerPath: 'tasks/api',
	tagTypes: ['Tasks'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://kanban-board-a0d3e-default-rtdb.europe-west1.firebasedatabase.app/',
	}),
	endpoints: (build) => ({
		getColumns: build.query<KanbanColumn[], null>({
			query: () => ({
				url: `columns.json`,
			}),
		}),

		// reorderTasks: build.mutation({
		// 	query: (TaskCards: TaskCard[]) => ({
		// 		url: `taskCards.json`,
		// 		method: 'PUT',
		// 		body: TaskCards,
		// 	}),
		// 	invalidatesTags: () => [
		// 		{
		// 			type: 'Tasks',
		// 		},
		// 	],
		// }),
	}),
})

export const { useGetColumnsQuery } = tasksApi
