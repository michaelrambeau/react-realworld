import React from "react";

class FetchPlayers extends React.Component {
  state = {
    loading: true,
    failed: false,
    players: []
  };
  loadPlayers = async () => {
    const { api } = this.props;
    try {
      const players = await api.findAll();
      this.setState({ players, loading: false, failed: false });
    } catch (err) {
      this.setState({ players: [], loading: false, failed: true });
    }
  };
  componentDidMount() {
    this.loadPlayers();
  }
  render() {
    const { loading, players, failed } = this.state;
    return this.props.children({ loading, players, failed });
  }
}

export default FetchPlayers;
