import React from "react";
import PropTypes from "prop-types";

class FetchPlayers extends React.Component {
  static propTypes = {
    api: PropTypes.object.isRequired
  };
  state = {
    loading: true,
    players: [],
    error: null
  };
  loadPlayers = async () => {
    const { api } = this.props;
    try {
      const players = await api.findAll();
      this.setState({ players, loading: false, error: null });
    } catch (error) {
      this.setState({ players: [], loading: false, error });
    }
  };
  componentDidMount() {
    this.loadPlayers();
  }
  render() {
    const { loading, players, error } = this.state;
    return this.props.children({ loading, players, error });
  }
}

export default FetchPlayers;
