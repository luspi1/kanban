import { type FC } from 'react'
import { Container } from 'src/UI/Container'
import { Helmet } from 'react-helmet-async'

import styles from './index.module.scss'
import { useGetBoardsQuery } from 'src/store/tasks/tasks.api'
import { BoardsList } from 'src/modules/boards-list/boards-list'

export const BoardsPage: FC = () => {
	const { data: boardsData } = useGetBoardsQuery(null)
	return (
		<Container className={styles.boardsPage} $margin='20px auto 35px auto'>
			<Helmet>
				<title>Ваши доски</title>
			</Helmet>
			<h1>Ваши доски</h1>
			<BoardsList boards={boardsData} />
		</Container>
	)
}
