import { type FC } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'

import { TitleColumns } from 'src/pages/home-page/components/title-columns/title-columns'
import { Tracks } from 'src/modules/tracks/tracks'

import styles from './index.module.scss'
import { TopMenu } from 'src/pages/home-page/components/top-menu/top-menu'
import { TaskForm } from 'src/modules/task-form/task-form'

export const HomePage: FC = () => {
	return (
		<Container className={styles.homePage} margin='20px auto 35px auto'>
			<Helmet>
				<title>Канбан</title>
			</Helmet>
			<TopMenu />
			<TitleColumns />
			<Tracks />
			<TaskForm />
		</Container>
	)
}
