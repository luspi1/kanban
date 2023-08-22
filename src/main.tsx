import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/App/App'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<React.StrictMode>
			<HelmetProvider>
				<BrowserRouter>
					<DndProvider backend={HTML5Backend}>
						<ToastContainer />
						<App />
					</DndProvider>
				</BrowserRouter>
			</HelmetProvider>
		</React.StrictMode>
	</Provider>
)
