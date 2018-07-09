// @flow
import * as React from "react"; // see https://flow.org/en/docs/react/types/
// import React from "react";
import type { RestApi } from "../api/types";

type State = {
  loading: boolean,
  error: ?Object,
  data: Array<Object>,
  total: number
};
type Props = {
  api: RestApi,
  query?: {
    skip?: number,
    limit?: number
  },
  children: State => React.Node
};

// Compare 2 search queries and return true if they are the same
function isSameQuery(prevQuery: Object, query: Object) {
  if (!query || !prevQuery) return true;
  const fields = Object.keys(query);
  return fields.every(fieldName => prevQuery[fieldName] === query[fieldName]);
}

class FetchItemList extends React.Component<Props, State> {
  state = {
    loading: true,
    data: [],
    total: 0,
    error: null
  };
  fetchItems = async () => {
    const { api, query } = this.props;
    const { limit, skip } = query || {};
    this.setState(state => ({ ...state, loading: true }));
    try {
      const { data, total } = await api.find({ skip, limit });
      this.setState({ data, total, loading: false, error: null });
    } catch (error) {
      this.setState({ data: [], total: 0, loading: false, error });
    }
  };
  componentDidMount() {
    this.fetchItems();
  }
  componentDidUpdate(prevProps: Props) {
    if (
      this.props.query &&
      prevProps.query &&
      !isSameQuery(prevProps.query, this.props.query)
    ) {
      this.fetchItems();
    }
  }
  render() {
    return this.props.children(this.state);
  }
}

export default FetchItemList;
