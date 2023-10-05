import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	type Board,
	type BoardId,
	type KanbanColumn,
	type TaskCard,
	type TrackItem,
} from 'src/types/tasks'

type ColumnsWithId = [BoardId, KanbanColumn[]]

export const tasksApi = createApi({
	reducerPath: 'tasks/api',
	tagTypes: ['Tasks'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:4001/api/v1',
	}),
	endpoints: (build) => ({
		getColumns: build.query<KanbanColumn[], string | undefined>({
			query: (param) => ({
				url: `boards/${param ?? '0'}/allColumns`,
			}),
			providesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),
		getTracks: build.query<TrackItem[], string | undefined>({
			query: (param) => ({
				url: `boards/${param ?? '0'}/tracks`,
			}),
			providesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),
		getTitle: build.query<string[], string | undefined>({
			query: (param) => ({
				url: `boards/${param ?? '0'}/titleColumns`,
			}),
		}),

		reorderColumn: build.mutation<null, BoardId & KanbanColumn>({
			query: ({ boardId, ...column }) => ({
				url: `boards/${boardId ?? '0'}/columns`,
				method: 'PUT',
				body: column,
			}),
			invalidatesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),

		setColumns: build.mutation<null, ColumnsWithId>({
			query: ([boardId, columns]) => ({
				url: `boards/${boardId ?? '0'}/updAllCol`,
				method: 'PUT',
				body: columns,
			}),
			invalidatesTags: () => [
				{
					type: 'Tasks',
				},
			],
		}),
		getBoards: build.query<Board[], null>({
			query: () => ({
				url: `/allBoards`,
			}),
		}),
		getBoardById: build.query<Board, string>({
			query: (id) => ({
				url: `/boards/${id}`,
			}),
		}),
		getTaskById: build.query<TaskCard, string>({
			query: (id) => ({
				url: `/task/${id}`,
			}),
			providesTags: ['Tasks'],
		}),
		setTaskItem: build.mutation<null, TaskCard>({
			query: (task) => ({
				url: `taskItem/${task.id}`,
				method: 'PUT',
				body: task,
			}),
			invalidatesTags: ['Tasks'],
		}),
		addTaskItem: build.mutation({
			query: ({ columnId, title }) => ({
				url: `addTask`,
				method: 'POST',
				body: { columnId, title },
			}),
			invalidatesTags: ['Tasks'],
		}),
	}),
})

export const {
	useGetTracksQuery,
	useReorderColumnMutation,
	useSetColumnsMutation,
	useSetTaskItemMutation,
	useGetTitleQuery,
	useGetColumnsQuery,
	useGetBoardsQuery,
	useGetBoardByIdQuery,
	useGetTaskByIdQuery,
	useAddTaskItemMutation,
} = tasksApi
