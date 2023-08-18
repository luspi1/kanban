import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type TitleColumn } from 'src/types/titleColumns'

export const tasksApi = createApi({
	reducerPath: 'tasks/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://kanban-board-a0d3e-default-rtdb.europe-west1.firebasedatabase.app/',
	}),
	endpoints: (build) => ({
		getColumns: build.query<TitleColumn[], null>({
			query: () => ({
				url: `titleColumns.json`,
			}),
		}),
	}),
})

export const { useGetColumnsQuery } = tasksApi
