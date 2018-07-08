import React, { Fragment } from "react";
import PropTypes from "prop-types";

import PlayerList from "../../components/PlayerList";
import Loading from "../../components/Loading";
import Alert from "../../components/Alert";
import Pagination from "../../containers/Pagination";

const List = ({ loading, error, data, locale }) => {
  if (loading) return <Loading />;
  if (error) return <Alert>{error.message}</Alert>;
  return (
    <Pagination data={data} skip={0} limit={2} total={5}>
      {({ pages, currentPage }) => (
        <div>
          <PlayerList players={data} locale={locale} />
          <PaginationControls pages={pages} currentPage={currentPage} />
        </div>
      )}
    </Pagination>
  );
};

const PaginationControls = props => {
  const { pages, currentPage } = props;
  return (
    <div>
      {pages.map(page => {
        return page === currentPage ? (
          <span>{page}</span>
        ) : (
          <button key={page} className="btn">
            {page}
          </button>
        );
      })}
    </div>
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
