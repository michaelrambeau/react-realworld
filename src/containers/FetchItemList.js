// @flow
import * as React from "react"; // see https://flow.org/en/docs/react/types/
// import React from "react";
import type { RestApi } from "../api/types";

type State = {
  loading: boolean,
  error: ?Object,
  data: Array<Object>
};
type Props = {
  api: RestApi,
  children: State => React.Node
};

class FetchItemList extends React.Component<Props, State> {
  state = {
    loading: true,
    data: [],
    error: null
  };
  fetchItems = async () => {
    const { api } = this.props;
    try {
      const { data } = await api.find();
      this.setState({ data, loading: false, error: null });
    } catch (error) {
      this.setState({ data: [], loading: false, error });
    }
  };
  componentDidMount() {
    this.fetchItems();
  }
  render() {
    return this.props.children(this.state);
  }
}

export default FetchItemList;
