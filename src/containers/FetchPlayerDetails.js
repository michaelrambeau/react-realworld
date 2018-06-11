import React from "react";
import PropTypes from "prop-types";

class FetchPlayerDetails extends React.Component {
  static propTypes = {
    api: PropTypes.object.isRequired
  };
  state = {
    loading: true,
    player: null,
    failed: false
  };
  loadPlayer = async () => {
    const { id, api } = this.props;
    try {
      const player = await api.findById(id);
      this.setState({ player, loading: false, failed: false });
    } catch (error) {
      this.setState({ player: null, loading: false, failed: true });
    }
  };
  componentDidMount() {
    this.loadPlayer();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.loadPlayer();
    }
  }
  render() {
    const { loading, player } = this.state;
    return this.props.children({ loading, player });
  }
}

export default FetchPlayerDetails;
