import React, { Fragment } from "react";
import PropTypes from "prop-types";

import PlayerList from "../../components/PlayerList";
import PaginationControls from "../../components/PaginationControls";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import Pagination from "../../containers/Pagination";

const List = ({ loading, error, data, total, locale, setPage, query }) => {
  if (loading) return <Loading />;
  if (error) return <Alert>{error.message}</Alert>;
  const { skip, limit } = query;
  return (
    <Pagination data={data} skip={skip} limit={limit} total={total}>
      {({ pages, currentPage }) => (
        <div>
          <PlayerList players={data} locale={locale} />
          <PaginationControls
            pages={pages}
            currentPage={currentPage}
            setPage={setPage}
          />
        </div>
      )}
    </Pagination>
  );
};

const PlayerListPage = props => {
  return (
    <Fragment>
      <h2>Player List</h2>
      <List {...props} />
    </Fragment>
  );
};

PlayerListPage.propTypes = {
  player: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  locale: PropTypes.string.isRequired
};

export default PlayerListPage;
