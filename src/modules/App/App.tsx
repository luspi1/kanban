import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/Layout/Layout'
import { HomePage } from 'src/pages/home-page/home-page'

export const App: FC = () => {
	return (
		<Routes>
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	)
}
export default App
