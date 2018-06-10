import React from 'react'
import { waitForElement, wait } from 'react-testing-library'

import render from './render-with-context'
import App from '../App'
import createApi from '../api/players-api'

const dependencies = {
  api: createApi()
}
it('Should render the player list with 3 players', async () => {
  const { getByText, container } = render(<App dependencies={dependencies} />, {
    route: '/players'
  })
  const msg = getByText(/Player List/i)
  await wait(() => getByText(/Curry/))
  const table = await waitForElement(() => container.querySelector('table'))
  const links = Array.from(table.querySelectorAll('a'))
  expect(links.length).toBe(3)
})
