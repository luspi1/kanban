import { type FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'
import { Helmet } from 'react-helmet-async'
import { AppRoute } from 'src/helpers/consts'

export const NotFound: FC = () => (
	<main className={styles.notFound}>
		<Helmet>
			<title>Страница не найдена</title>
		</Helmet>
		<h1>
			<span>404</span> <br /> Страница не найдена &#128533;
		</h1>
		<Link to={AppRoute.Boards}>На главную</Link>
	</main>
)
