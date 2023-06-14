import { Link, useParams } from "react-router-dom";
import { IMovie } from "../../types/movie.type";
import { useEffect, useState } from "react";
import { IResult } from "../../types/result.type";
import {
  useGetMovieRatedQuery,
  useGetMovieUpcomingQuery,
  useGetNowPlayingQuery,
  useGetPopularQuery,
  useGetTrendingQuery,
} from "../home/home.service";
import Pagination from "./Pagination/Pagination";

export function ViewAll() {
  const [data, setData] = useState<IResult>();
  const [currentPage, setCurrentPage] = useState(1);
  const { option } = useParams();

  // Sử dụng RTK Query để fetch data
  const movieQuery =
    option === "top_rated"
      ? useGetMovieRatedQuery
      : option === "now_playing"
      ? useGetNowPlayingQuery
      : option === "popular"
      ? useGetPopularQuery
      : option === "upcoming"
      ? useGetMovieUpcomingQuery
      : useGetTrendingQuery;
  const { data: movieData, isFetching } = movieQuery(currentPage);

  useEffect(() => {
    setData(movieData);
  }, [movieData, currentPage]);
  const title =
    option === "top_rated"
      ? "Top rated"
      : option === "upcoming"
      ? "Upcoming"
      : option === "now_playing"
      ? "Now playing"
      : option === "popular"
      ? "Popular"
      : "Trending";
  return (
    <div className="w-full py-2">
      <div className=" flex flex-row justify-between items-center py-4 border-b-2 border-gray-200">
        <div className="text-sm font-[500] dark:text-white ">
          <Link to="/" className="hover:text-blue-600">
            Trang chủ
          </Link>
          <span className="text-gray-500 dark:text-gray-400 "> / </span>
          <span className="text-gray-500 dark:text-gray-400">{title}</span>
        </div>

        <Pagination
          total_pages={data?.total_pages || 1}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-2">
        {data &&
          data?.results?.map((item: IMovie, index: number) => {
            return (
              index < 12 && (
                <div className="col-span-1 " key={item.id}>
                  <Link to={`/movie/${item.id}`}>
                    <div className="card">
                      <div className="card2">
                        <img
                          className="w-full max-h-56 object-cover rounded"
                          src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-sm dark:text-white font-[500]">
                        {" "}
                        {item.title || item.name}{" "}
                      </span>
                      <span className="text-sm dark:text-white bg-blue-500 p-2 rounded">
                        {item.vote_average}
                      </span>
                    </div>
                  </Link>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}
