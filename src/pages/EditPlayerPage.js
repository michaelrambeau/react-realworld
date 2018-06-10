import React from 'react'
import { withRouter } from 'react-router-dom'
import { Formik } from 'formik'

import PlayerForm from '../components/PlayerForm'
import FetchPlayerDetails from '../containers/FetchPlayerDetails'
import ApiContext from '../containers/ApiContext'
import Loading from '../components/Loading'

const EditPlayerForm = props => <PlayerForm {...props} isNewPlayer={false} />

const EditPlayerPage = ({ dependencies, match, history }) => {
  const { id } = match.params
  const { api } = dependencies
  const onSubmit = async values => {
    await api.edit(values)
    history.push('/players')
  }
  return (
    <FetchPlayerDetails id={id} api={api}>
      {({ player, loading }) => {
        return loading ? (
          <Loading />
        ) : (
          <div>
            <h2>Edit {player.name}</h2>
            <Formik onSubmit={onSubmit} initialValues={player}>
              {EditPlayerForm}
            </Formik>
          </div>
        )
      }}
    </FetchPlayerDetails>
  )
}

export default withRouter(EditPlayerPage)
