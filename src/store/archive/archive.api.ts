import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type TaskCard } from 'src/types/tasks'
import { BASE_URL } from 'src/helpers/consts'

export const archiveApi = createApi({
	reducerPath: 'archive/api',
	tagTypes: ['ArchiveTasks'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (build) => ({
		getArchiveByBoardId: build.query<TaskCard[], string | undefined>({
			query: (param) => ({
				url: `boards/${param ?? ''}/archive`,
			}),
			providesTags: ['ArchiveTasks'],
		}),
		deleteTaskById: build.mutation<null, string | null>({
			query: (taskId) => ({
				url: `taskDelete/${taskId ?? ''}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => ['ArchiveTasks'],
		}),
	}),
})

export const { useGetArchiveByBoardIdQuery, useDeleteTaskByIdMutation } = archiveApi
