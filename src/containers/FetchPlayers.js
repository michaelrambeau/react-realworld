import React from 'react'

class FetchPlayers extends React.Component {
  state = {
    loading: true,
    players: []
  }
  loadPlayers = async () => {
    const { api } = this.props
    const players = await api.findAll()
    console.log('Found!')

    this.setState({ players, loading: false })
  }
  componentDidMount() {
    console.log('Did mount')

    this.loadPlayers()
  }
  render() {
    const { loading, players } = this.state
    console.log('Render!', loading)

    return this.props.children({ loading, players })
  }
}

export default FetchPlayers
