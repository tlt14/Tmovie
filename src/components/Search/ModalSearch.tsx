import * as React from "react";
import { useGetTrendingQuery } from "../../services/home.service";
import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setShowModal } from "../../pages/search/search.slice";
import { Link } from "react-router-dom";
import { useSearchMovieQuery } from "../../services/search.service";

export default function ModalSearch() {
  const {query} = useSelector((state:RootState)=>state.search)
  const { data } = useSearchMovieQuery(query) ;
  const dispatch = useDispatch();
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={`fixed top-[7%] left-[25%] right-0 z-50 w-full p-4 overflow-x-hidden h-[calc(50%)] overflow-y-scroll scroll-smooth`}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Kết quả
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="defaultModal"
              onClick={() => dispatch(setShowModal(false))}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-6 grid grid-cols-2 ">
            {data &&
              data.results.map((item) => {
                return (
                  item.backdrop_path &&
                  <div className="col-span-1" key={item.id} >
                    <Link to={`/movie/${item.id}`} className="flex items-center justify-start" onClick={()=>dispatch(setShowModal(false))}>
                      <img
                        className="w-10 h-12 object-cover rounded mt-2"
                        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        alt={item.title}
                      />
                      <div className="ml-4 dark:text-white">
                        {item.name || item.title || item.original_title}
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
