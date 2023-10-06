import React, { type FC } from 'react'
import { AppRoute } from 'src/helpers/consts'
import { generatePath, Link, useParams } from 'react-router-dom'

import styles from './index.module.scss'
import { useGetBoardByIdQuery } from 'src/store/tasks/tasks.api'
import { AvatarSvg } from 'src/UI/icons/avatarSVG'
import { getRandomColor } from 'src/helpers/utils'
import { Button } from 'src/UI/Button'

export const TopMenu: FC = React.memo(() => {
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
				<Link to={generatePath(AppRoute.Archive, { boardId: String(boardId) })}>
					<Button $margin='0 15px 0 0' $border='1px solid #FFA011' $color='#FFA011'>
						Архив
					</Button>
				</Link>
				<ul className={styles.membersList}>
					{boardData.members.map((member) => (
						<li key={member.id} title={member.name}>
							<AvatarSvg color={getRandomColor()} />
						</li>
					))}
				</ul>
				<Link className={styles.outBtn} to={AppRoute.Boards}>
					выход
				</Link>
			</div>
		</div>
	)
})
TopMenu.displayName = 'TopMenu'
