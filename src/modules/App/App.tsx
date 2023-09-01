import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/Layout/Layout'
import { HomePage } from 'src/pages/home-page/home-page'
import { BoardsPage } from 'src/pages/boards-page/boards-page'

export const App: FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Boards} element={<Layout />}>
				<Route index element={<BoardsPage />} />
				<Route path={AppRoute.Kanban} element={<HomePage />} />
			</Route>
		</Routes>
	)
}
export default App
