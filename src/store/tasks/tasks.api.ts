import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type TitleColumn } from 'src/types/titleColumns'
import { type TaskCard } from 'src/types/tracks'

export const tasksApi = createApi({
	reducerPath: 'tasks/api',
	tagTypes: ['Tasks'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://kanban-board-a0d3e-default-rtdb.europe-west1.firebasedatabase.app/',
	}),
	endpoints: (build) => ({
		getColumns: build.query<TitleColumn[], null>({
			query: () => ({
				url: `titleColumns.json`,
			}),
		}),
		getTasks: build.query<TaskCard[], null>({
			query: () => ({
				url: `taskCards.json`,
			}),
			providesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),
		reorderTasks: build.mutation({
			query: (TaskCards: TaskCard[]) => ({
				url: `taskCards.json`,
				method: 'PUT',
				body: TaskCards,
			}),
			invalidatesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),
	}),
})

export const { useGetColumnsQuery, useGetTasksQuery, useReorderTasksMutation } = tasksApi
