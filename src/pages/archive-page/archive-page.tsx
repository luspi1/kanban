import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetBoardByIdQuery } from 'src/store/tasks/tasks.api'
import { ArchiveSvg } from 'src/UI/icons/archiveSVG'
import { useGetArchiveByBoardIdQuery, useRestoreTaskMutation } from 'src/store/archive/archive.api'
import { formatDate } from 'src/helpers/utils'
import { Button } from 'src/UI/Button'
import { type TaskCard } from 'src/types/tasks'

export const ArchivePage = () => {
	const { boardId } = useParams()
	const { data: boardData } = useGetBoardByIdQuery(String(boardId))
	const { data: archiveTasks } = useGetArchiveByBoardIdQuery(String(boardId))

	const [restoreTask] = useRestoreTaskMutation()

	const navigate = useNavigate()

	const goBack = () => {
		navigate(-1)
	}

	const handleRestoreBtn = async (task: TaskCard) => {
		restoreTask(task).catch((e) => console.error(e))
	}

	return (
		<Container $margin='20px auto 35px auto'>
			<Helmet>
				<title>Архив</title>
			</Helmet>
			<div className={styles.archiveTop}>
				<h1>
					{boardData?.title} <span>АРХИВ</span>
					<ArchiveSvg />
				</h1>
				<Button onClick={goBack}>Вернуться к канбану</Button>
			</div>

			<ul className={styles.archiveList}>
				{archiveTasks ? (
					archiveTasks.map((task) => (
						<li key={task.id}>
							<h4>{task.title}</h4>
							<p>{task.desc}</p>
							<p>
								<span>Ответственный:</span> {task.executor ?? 'Не назначен'}
							</p>
							<p>
								<span>Дата создания:</span>
								{formatDate(task.startDate, {
									year: 'numeric',
									month: 'numeric',
									day: 'numeric',
								}) ?? ''}
							</p>
							<Button
								$color='#ffffff'
								$background='#01DA32'
								$border='none'
								onClick={async () => await handleRestoreBtn(task)}
							>
								Восстановить
							</Button>
						</li>
					))
				) : (
					<li>Архив пуст</li>
				)}
			</ul>
		</Container>
	)
}
