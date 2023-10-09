import { type TaskCard } from 'src/types/tasks'
import { tasksApi } from 'src/store/tasks/tasks.api'

export const archiveApi = tasksApi.injectEndpoints({
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
			invalidatesTags: () => ['Tasks', 'ArchiveTasks'],
		}),
		restoreTask: build.mutation<null, TaskCard>({
			query: (task) => ({
				url: `taskRestore`,
				method: 'POST',
				body: task,
			}),
			invalidatesTags: () => ['Tasks', 'ArchiveTasks'],
		}),
	}),
})

export const { useGetArchiveByBoardIdQuery, useDeleteTaskByIdMutation, useRestoreTaskMutation } =
	archiveApi
