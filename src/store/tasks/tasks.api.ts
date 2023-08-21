import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { type TitleColumn } from 'src/types/titleColumns'
import { type Track } from 'src/types/tracks'

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
		getTracks: build.query<Track[], null>({
			query: () => ({
				url: `tracks.json`,
			}),
		}),
	}),
})

export const { useGetColumnsQuery, useGetTracksQuery } = tasksApi
