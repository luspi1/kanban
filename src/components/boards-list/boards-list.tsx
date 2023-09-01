import { type FC } from 'react'
import { type Board } from 'src/types/tasks'

import styles from './index.module.scss'
import { generatePath, Link } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

type BoardsListProps = {
	boards?: Board[]
}
export const BoardsList: FC<BoardsListProps> = ({ boards }) => {
	return (
		<ul className={styles.boardsList}>
			{boards?.map((board) => (
				<li className={styles.boardsItem} key={board.id}>
					<Link to={generatePath(AppRoute.Kanban, { boardId: board.id })}>{board.title}</Link>
				</li>
			))}
		</ul>
	)
}
