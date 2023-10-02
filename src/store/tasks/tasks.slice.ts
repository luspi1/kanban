import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type KanbanColumn, type TrackItem } from 'src/types/tasks'

type TasksSliceState = {
	localeTracks: TrackItem[] | []
}

const initialState: TasksSliceState = {
	localeTracks: [],
}

export const tasksSlice = createSlice({
	name: NameSpace.Tasks,
	initialState,
	reducers: {
		setLocaleTracks: (state, action: PayloadAction<TrackItem[] | []>) => {
			state.localeTracks = action.payload
		},
		reorderLocaleColumn: (state, action: PayloadAction<KanbanColumn>) => {
			const colId = +action.payload.id
			let colIdx = 0

			const currentTrack = state.localeTracks.find((track) => {
				return track.columns.some((column) => +column.id === colId)
			}) as TrackItem

			const trackIdx = +currentTrack.id ?? 0

			currentTrack?.columns.forEach((column, i) => {
				if (+column.id === colId) {
					colIdx = i
				}
			})
			state.localeTracks[trackIdx].columns.splice(colIdx, 1, action.payload)
		},
		updateAllLocaleColumns: (state, action: PayloadAction<KanbanColumn[]>) => {
			const newColumns = [...action.payload]
			state.localeTracks.map((track) => {
				const colLength = track.columns.length
				const currentCols = newColumns.splice(0, colLength)
				return track.columns.splice(0, colLength, ...currentCols)
			})
		},
	},
})
export const tasksActions = tasksSlice.actions
export const tasksReducer = tasksSlice.reducer
