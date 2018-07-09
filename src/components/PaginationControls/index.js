import React from "react";

const PaginationControls = props => {
  const { pages, currentPage, setPage } = props;
  return (
    <div className="btn-group">
      {pages.map(page => (
        <PageLink
          key={page}
          page={page}
          currentPage={currentPage}
          setPage={setPage}
        />
      ))}
    </div>
  );
};

const PageLink = ({ page, currentPage, setPage }) => {
  return page === currentPage ? (
    <button disabled className="btn btn-default">
      {page + 1}
    </button>
  ) : (
    <button
      key={page}
      className="btn btn-default btn-ghost"
      onClick={() => setPage(page)}
    >
      {page + 1}
    </button>
  );
};

export default PaginationControls;
