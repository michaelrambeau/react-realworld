import React from "react";

type PaginatedList = {
  data: Array<any>,
  skip: number,
  limit: number,
  total: number
};

const Pagination = (props: { ...PaginatedList, children: Function }) => {
  const { data, skip, limit, total, children } = props;
  const pageCount = Math.ceil(total / limit);
  const currentPage = skip / limit;
  const pages = [...Array(pageCount).keys()];
  return children({ pages, currentPage });
};

export default Pagination;
