import { type FC, useEffect, useRef, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { AppRoute } from 'src/helpers/consts'

import { Layout } from 'src/modules/Layout/Layout'
import { HomePage } from 'src/pages/HomePage/HomePage'

export const App: FC = () => {
	const isRenderedRef = useRef<boolean>(false)

	const [isAuth] = useState(true)
	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) {
			navigate('/login')
		}

		isRenderedRef.current = true
	}, [])

	return (
		<Routes>
			<Route path={AppRoute.Home} element={<Layout />}>
				<Route index element={<HomePage />} />
			</Route>
		</Routes>
	)
}
export default App
