import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/layout/layout'
import { HomePage } from 'src/pages/home-page/home-page'
import { BoardsPage } from 'src/pages/boards-page/boards-page'
import { ArchivePage } from 'src/pages/archive-page/archive-page'
import { NotFound } from 'src/pages/not-found/not-found'

export const App: FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Boards} element={<Layout />}>
				<Route index element={<BoardsPage />} />
				<Route path={AppRoute.Kanban} element={<HomePage />} />
				<Route path={AppRoute.Archive} element={<ArchivePage />} />
			</Route>
			<Route path='*' element={<NotFound />} />
		</Routes>
	)
}
export default App
