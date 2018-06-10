import React from 'react'
import PropTypes from 'prop-types'

class FetchPlayerDetails extends React.Component {
  static propTypes = {
    api: PropTypes.object.isRequired
  }
  state = {
    loading: true,
    player: null
  }
  loadPlayer = async () => {
    const { id, api } = this.props
    this.setState({ player: null, loading: true })
    const player = await api.findById(id)
    this.setState({ player, loading: false })
  }
  componentDidMount() {
    this.loadPlayer()
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.loadPlayer()
    }
  }
  render() {
    const { loading, player } = this.state
    return this.props.children({ loading, player })
  }
}

export default FetchPlayerDetails
