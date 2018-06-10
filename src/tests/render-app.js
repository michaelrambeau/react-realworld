import React from 'react'

import renderWithContext from './render-with-context'
import createApi from '../api/players-api'
import App from '../App'

const dependencies = {
  api: createApi()
}

export default function renderApp({ route }) {
  return renderWithContext(<App dependencies={dependencies} />, {
    route
  })
}
