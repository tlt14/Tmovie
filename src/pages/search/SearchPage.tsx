import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  useGetGenreQuery,
  useSearchMovieQuery,
} from "./services/search.service";
import { IMovie } from "../../types/movie.type";
import { useSelector } from "react-redux";
import { RootState } from '../../store';

type Props = {};
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const SearchPage = (props: Props) => {
  const {query:keySearch} = useSelector((state:RootState)=>state.search)
  const { data } = useSearchMovieQuery(keySearch);
  const { data: genres } = useGetGenreQuery();
  const query = useQuery();
  const gm = query.get("gm") || -1;
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold dark:text-white">Movie</h2>
        <button className="border-2 border-blue-600 rounded-lg px-4 py-1 dark:text-blue-500 hover:bg-opacity-5 hover:bg-slate-400">
          Thu gọn
        </button>
      </div>
      <div className="flex flex-wrap">
      <button
              className={`font-mono text-blue-500 px-4 py-2 rounded-lg ${gm === -1 &&"bg-blue-500 text-white"}`}
            >
              <Link to={`/search`} className=" ">
                Tất cả
              </Link>
            </button>
        {genres?.genres.map((item) => {
          return (
            <button
              key={item.id}
              className={`font-mono text-blue-500 px-4 py-2 rounded-lg 
                                              ${
                                                gm &&
                                                +gm === item.id &&
                                                "bg-blue-500 text-white"
                                              }  
                                               `}
            >
              <Link to={`?gm=${item.id}`} className=" ">
                {item.name}
              </Link>
            </button>
          );
        })}
      </div>
      <div className="w-full py-2">
        <div className="flex flex-row justify-between items-center py-2 border-b-2 border-gray-200">
          <p className="text-xl font-[500] dark:text-white ">
            {"Movie Result"}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-2">
          {data?.results?.map((item: IMovie, index: number) => {
            return (
              index < 12 &&
              item.backdrop_path && (
                <div className="col-span-1" key={index}>
                  <Link to={`/movie/${item.id}`}>
                    <div className="card">
                      <div className="card2">
                        <img
                          className="w-full h-full object-cover rounded"
                          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                          alt={item.title}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm dark:text-white font-[500]">
                        {" "}
                        {item.title}
                      </span>
                      {/* <span className="text-sm dark:text-white bg-blue-500 p-2 rounded">8.8</span> */}
                    </div>
                  </Link>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
