import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import createApi from './api/players-api'

import App from './App'

const dependencies = {
  api: createApi({ immediate: false })
}

render(
  <Router>
    <App dependencies={dependencies} />
  </Router>,
  document.getElementById('root')
)
