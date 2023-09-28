import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { NameSpace } from 'src/helpers/consts'
import { type CheckboxItem } from 'src/types/checkbox'
import { uid } from 'react-uid'
import { type FileWithPreview } from 'src/types/files'

type TaskFormState = {
	currentTaskId: string | null
	activityForm: boolean
	checkboxes: CheckboxItem[] | []
	photos: FileWithPreview[] | []
}

const initialState: TaskFormState = {
	currentTaskId: null,
	activityForm: false,
	checkboxes: [],
	photos: [],
}

export const taskFormSlice = createSlice({
	name: NameSpace.TaskForm,
	initialState,
	reducers: {
		setCurrentTaskId: (state, action: PayloadAction<string>) => {
			state.currentTaskId = action.payload
			state.activityForm = true
		},
		changeActivity: (state) => {
			state.activityForm = false
		},
		setCheckboxes: (state, action: PayloadAction<CheckboxItem[]>) => {
			state.checkboxes = action.payload
		},
		addCheckbox: (state, action: PayloadAction<string>) => {
			const currentIndex = state.checkboxes.length
			const newCheckbox: CheckboxItem = {
				id: uid(action.payload, currentIndex),
				title: action.payload ?? '',
				checked: false,
			}
			state.checkboxes = [...state.checkboxes, newCheckbox]
		},
		changeCheckboxById: (state, action: PayloadAction<string>) => {
			const currentCheckbox = state.checkboxes.find((el) => el.id === action.payload)
			const filteredCheckboxes = state.checkboxes.filter((el) => el.id !== action.payload)
			if (currentCheckbox) {
				currentCheckbox.checked = !currentCheckbox.checked
				state.checkboxes = [...filteredCheckboxes, currentCheckbox]
			}
		},
		removeCheckboxById: (state, action: PayloadAction<string>) => {
			state.checkboxes = state.checkboxes.filter((el) => el.id !== action.payload)
		},
		setPhotoFiles: (state, action: PayloadAction<FileWithPreview[]>) => {
			state.photos = action.payload
		},
		removePhotoByPreview: (state, action: PayloadAction<string>) => {
			state.photos = state.photos.filter((photo) => photo.preview !== action.payload)
		},
		addPhotoFiles: (state, action: PayloadAction<File[]>) => {
			const preparedFiles: FileWithPreview[] = action.payload.map((file) =>
				Object.assign(file, { preview: URL.createObjectURL(file) })
			)
			state.photos = [...state.photos, ...preparedFiles]
		},
	},
})
export const taskFormActions = taskFormSlice.actions
export const taskFormReducer = taskFormSlice.reducer
