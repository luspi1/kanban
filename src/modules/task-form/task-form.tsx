import { type FC, useEffect } from 'react'

import styles from './index.module.scss'
import { useGetTaskByIdQuery, useSetTaskItemMutation } from 'src/store/tasks/tasks.api'
import { CrossSvg } from 'src/UI/icons/crossSVG'
import { useActions } from 'src/hooks/actions/actions'
import { useAppSelector } from 'src/hooks/store'
import { getActivityTaskForm, getPhotos } from 'src/modules/task-form/store/task-form.selectors'
import cnBind from 'classnames/bind'
import { Controller, type FieldValues, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { taskSchema } from 'src/modules/task-form/schema'
import { Button } from 'src/UI/Button'
import { ControlledField } from 'src/UI/ControlledField/СontrolledField'
import { ControlledTextarea } from 'src/UI/ControlledTextarea/ControlledTextarea'
import { type TaskCard, type TaskNameInputs } from 'src/types/tasks'
import { toast } from 'react-toastify'
import Select from 'react-select'
import { getValue } from 'src/helpers/utils'
import { CategoryOptions, DifficultOptions, PriorityOptions } from 'src/modules/task-form/consts'
import { type SelOption } from 'src/types/select'
import cn from 'classnames'
import { CheckboxList } from 'src/components/checkbox-list/checkbox-list'
import { TaskDropzone } from 'src/modules/task-form/components/task-dropzone/task-dropzone'
import { DependentTasks } from 'src/modules/task-form/components/dependent-tasks/dependent-tasks'
import { TaskComments } from 'src/modules/task-form/components/task-comments/task-comments'

type TaskFormProps = {
	id: string | null
}
export const TaskForm: FC<TaskFormProps> = ({ id }) => {
	const cx = cnBind.bind(styles)

	const { data: currentTask } = useGetTaskByIdQuery(id ?? '0')
	const [setTaskItem] = useSetTaskItemMutation()
	const { changeActivity, setCheckboxes, setPhotoFiles } = useActions()
	const activityForm = useAppSelector(getActivityTaskForm)
	const photosForm = useAppSelector(getPhotos)

	const {
		handleSubmit,
		control,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<FieldValues>({
		mode: 'onSubmit',
		resolver: yupResolver(taskSchema),
		defaultValues: {
			title: '',
			desc: '',
			priority: 'common',
			difficult: 'common',
			category: 'testing',
			checkboxes: [],
			photos: [],
		},
	})
	const inputNamesArr = Object.keys(getValues()) as TaskNameInputs[]
	const closeFormHandler = () => {
		changeActivity()
		inputNamesArr.forEach((name) => {
			setValue(name, currentTask?.[name])
		})
	}
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		if (currentTask) {
			const newTask: TaskCard = {
				...currentTask,
				...data,
				photos: photosForm,
			}
			setTaskItem(newTask)
				.then(() => changeActivity())
				.catch((e) => console.error(e))
		} else {
			toast.error('Задача не найдена')
		}
	}

	useEffect(() => {
		inputNamesArr.forEach((name) => {
			setValue(name, currentTask?.[name])
		})

		setCheckboxes(currentTask?.checkboxes ?? [])
		setPhotoFiles(currentTask?.photos ?? [])
	}, [currentTask, activityForm])

	if (!currentTask) {
		return (
			<div className={styles.taskForm}>
				<h4>Задача не найдена</h4>
			</div>
		)
	}
	return (
		<form
			className={cx(styles.taskForm, { _active: activityForm })}
			onSubmit={handleSubmit(onSubmit)}
		>
			<button className={styles.closeFormBtn} onClick={closeFormHandler} type='button'>
				<CrossSvg />
			</button>
			<ControlledField
				control={control}
				name='title'
				type='text'
				errors={errors}
				className={styles.titleInput}
				placeholder='Введите название задачи'
			/>
			<div className={styles.taskStatuses}>
				<Controller
					control={control}
					name='priority'
					render={({ field: { onChange, value } }) => (
						<Select
							classNamePrefix='status-select'
							className={cn('status-select', value)}
							options={PriorityOptions}
							value={getValue(value, PriorityOptions)}
							onChange={(newValue) => {
								onChange((newValue as SelOption).value)
							}}
						/>
					)}
				/>
				<Controller
					control={control}
					name='difficult'
					render={({ field: { onChange, value } }) => (
						<Select
							classNamePrefix='status-select'
							className={cn('status-select', '_outlined', value)}
							options={DifficultOptions}
							value={getValue(value, DifficultOptions)}
							onChange={(newValue) => {
								onChange((newValue as SelOption).value)
							}}
						/>
					)}
				/>
				<Controller
					control={control}
					name='category'
					render={({ field: { onChange, value } }) => (
						<Select
							classNamePrefix='status-select'
							className={cn('status-select', 'category')}
							options={CategoryOptions}
							value={getValue(value, CategoryOptions)}
							onChange={(newValue) => {
								onChange((newValue as SelOption).value)
							}}
						/>
					)}
				/>
			</div>
			<h6>
				Исполнитель: <span>{currentTask?.executor ?? 'не назначен'}</span>
			</h6>
			<h6>Описание:</h6>
			<ControlledTextarea
				control={control}
				name='desc'
				errors={errors}
				className={styles.descInput}
			/>
			<TaskDropzone />

			<DependentTasks currentTask={currentTask} />

			<CheckboxList name='checkboxes' control={control} />
			<TaskComments currentTask={currentTask} />
			<Button
				type='submit'
				$background='#00754A'
				color='#ffffff'
				$border='none'
				$margin='auto 0 0 0'
				width='200px'
			>
				Сохранить
			</Button>
		</form>
	)
}
