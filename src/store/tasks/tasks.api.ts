import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type KanbanColumn } from 'src/types/tasks'

export const tasksApi = createApi({
	reducerPath: 'tasks/api',
	tagTypes: ['Tasks'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3001/',
	}),
	endpoints: (build) => ({
		getColumns: build.query<KanbanColumn[], null>({
			query: () => ({
				url: `/columns`,
			}),
			providesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),

		reorderColumn: build.mutation({
			query: (column: KanbanColumn) => ({
				url: `/columns/${column.id}`,
				method: 'PUT',
				body: column,
			}),
			invalidatesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),
	}),
})

export const { useGetColumnsQuery, useReorderColumnMutation } = tasksApi
