import React from 'react'
import { waitForElement, wait, prettyDOM } from 'react-testing-library'

import render from './render-with-context'
import App from '../App'
import createApi from '../api/players-api'

const dependencies = {
  api: createApi()
}

it('Should render the homepage', () => {
  const { getByText } = render(<App dependencies={dependencies} />)
  const msg = getByText(/Welcome/i)
})
