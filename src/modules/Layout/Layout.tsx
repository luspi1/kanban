import { type FC } from 'react'
import { Outlet } from 'react-router-dom'

import styles from './index.module.scss'

export const Layout: FC = () => {
	return (
		<>
			<main className={styles.Container}>
				<Outlet />
			</main>
		</>
	)
}
