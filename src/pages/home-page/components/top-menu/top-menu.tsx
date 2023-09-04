import { type FC } from 'react'
import { AppRoute } from 'src/helpers/consts'
import { Link, useParams } from 'react-router-dom'

import styles from './index.module.scss'
import { useGetBoardByIdQuery } from 'src/store/tasks/tasks.api'
import { AvatarSvg } from 'src/UI/icons/avatarSVG'
import { getRandomColor } from 'src/helpers/utils'

export const TopMenu: FC = () => {
	const { boardId } = useParams()

	const { data: boardData } = useGetBoardByIdQuery(String(boardId))

	if (!boardData) {
		return <h2>Нет информации о проекте</h2>
	}

	return (
		<div className={styles.topMenu}>
			<div className={styles.projectInfo}>
				<img src={boardData.img} alt='project' />
				<div>
					<h1>Проект {boardData.title}</h1>
					<div className={styles.projectDate}>
						<p>{boardData.date}</p>
						<Link to={AppRoute.Boards}>Все проекты</Link>
					</div>
				</div>
			</div>
			<div className={styles.menuRight}>
				<ul className={styles.membersList}>
					{boardData.members.map((member) => (
						<li key={member.id} title={member.name}>
							<AvatarSvg color={getRandomColor()} />
						</li>
					))}
				</ul>
				<Link to={AppRoute.Boards}>выход</Link>
			</div>
		</div>
	)
}
