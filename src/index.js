import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import './Assets/styles.scss'
import App from './Components/App'
import ErrorBoundary from './Components/ErrorBoundary'
import './fontawesome'

const refresh = () => render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
)

refresh()
