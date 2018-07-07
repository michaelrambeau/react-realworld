// @import
import React from "react";

type State = {
  loading: boolean,
  error: ?Object,
  data: Array<Object>
};
type Props = {
  id: string,
  api: RestApi,
  children: State => React.Node
};

class FetchSingleItem extends React.Component<Props, State> {
  state = {
    loading: true,
    data: null,
    error: null
  };
  fetchItem = async () => {
    const { id, api } = this.props;
    try {
      const { data } = await api.get(id);
      this.setState({ data, loading: false, error: null });
    } catch (error) {
      this.setState({ player: null, loading: false, error });
    }
  };
  componentDidMount() {
    this.fetchItem();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.fetchItem();
    }
  }
  render() {
    return this.props.children(this.state);
  }
}

export default FetchSingleItem;
