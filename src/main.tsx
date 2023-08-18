import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './modules/App/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { HelmetProvider } from 'react-helmet-async'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<Provider store={store}>
		<React.StrictMode>
			<HelmetProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</HelmetProvider>
		</React.StrictMode>
	</Provider>
)
