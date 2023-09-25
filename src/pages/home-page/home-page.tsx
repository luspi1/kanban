import { type FC } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'

import { TitleColumns } from 'src/pages/home-page/components/title-columns/title-columns'
import { Tracks } from 'src/modules/tracks/tracks'

import styles from './index.module.scss'
import { TopMenu } from 'src/pages/home-page/components/top-menu/top-menu'
import { TaskForm } from 'src/modules/task-form/task-form'
import { useAppSelector } from 'src/hooks/store'
import { getCurrentTaskId } from 'src/modules/task-form/store/task-form.selectors'

export const HomePage: FC = () => {
	const taskId = useAppSelector(getCurrentTaskId)
	return (
		<Container className={styles.homePage} $margin='20px auto 35px auto'>
			<Helmet>
				<title>Канбан</title>
			</Helmet>
			<TopMenu />
			<TitleColumns />
			<Tracks />
			<TaskForm id={taskId} />
		</Container>
	)
}
