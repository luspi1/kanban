import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/App/App'
import { store } from './store'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer } from 'react-toastify'
import './index.scss'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<React.StrictMode>
			<HelmetProvider>
				<BrowserRouter>
					<ToastContainer />
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</React.StrictMode>
	</Provider>
)
