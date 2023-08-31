import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type KanbanColumn } from 'src/types/tasks'

export const tasksApi = createApi({
	reducerPath: 'tasks/api',
	tagTypes: ['Tasks'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4001/api/v1',
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
		getTitle: build.query<string[], null>({
			query: () => ({
				url: `/titleColumns`,
			}),
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
		setColumns: build.mutation({
			query: (columns: KanbanColumn[]) => ({
				url: `/allCol`,
				method: 'PUT',
				body: columns,
			}),
			invalidatesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),
	}),
})

export const {
	useGetColumnsQuery,
	useReorderColumnMutation,
	useSetColumnsMutation,
	useGetTitleQuery,
} = tasksApi
