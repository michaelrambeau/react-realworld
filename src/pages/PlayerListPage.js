import React from 'react'
import PlayerList from '../components/PlayerList'
import FetchPlayers from '../containers/FetchPlayers'
import ApiContext from '../containers/ApiContext'
import Loading from '../components/Loading'

const PlayerListPage = ({ dependencies }) => {
  const { api } = dependencies
  return (
    <div>
      <h2>Player List</h2>
      <FetchPlayers api={api}>
        {({ players, loading }) =>
          loading ? <Loading /> : <PlayerList players={players} />
        }
      </FetchPlayers>
    </div>
  )
}

export default PlayerListPage
