import * as React from "react";
import ReactPaginate from "react-paginate";

interface IPaginationProps {
  total_pages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Pagination(props: IPaginationProps) {
  const { total_pages, setCurrentPage} = props;
  return (
    <ReactPaginate
      pageCount={total_pages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={2}
      className="inline-flex -space-x-px"
      activeClassName="bg-indigo-500"
      pageLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      activeLinkClassName="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
      nextLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      previousLinkClassName="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      breakClassName=""
      breakLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        onPageChange={(e)=>setCurrentPage(e.selected+1)}
    />
  );
}
