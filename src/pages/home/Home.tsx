import Banner from "../../components/Banner";
import { IMovie } from "../../types/movie.type";
import MovieList from "./components/MovieList";
import Trending from "./components/Trending";
import {
  useGetMovieRatedQuery,
  useGetTrendingQuery,
  useGetMovieUpcomingQuery,
  useGetNowPlayingQuery,
  useGetPopularQuery,
} from "../../services/home.service";
import SkeletonMovieList from "./components/SkeletonMovieList";
import SkeletonTrending from "./components/SkeletonTrending";
const Home = () => {
  const {
    data: dataTrending,
    isLoading: isLoadingTrending,
    error: errorTrending,
  } = useGetTrendingQuery(1);
  const {
    data: dataRated,
    isLoading: isLoadingRated,
    error: errorRated,
  } = useGetMovieRatedQuery(1);
  const {
    data: dataUpcoming,
    isLoading: isLoadingUpcoming,
    error: errorUpcoming,
  } = useGetMovieUpcomingQuery(1);
  const {
    data: dataNowPlaying,
    isLoading: isLoadingNowPlaying,
    error: errorNowPlaying,
  } = useGetNowPlayingQuery(1);
  const {
    data: dataPopular,
    isLoading: isLoadingPopular,
    error: errorPopular,
  } = useGetPopularQuery(1);
  return (
    <>
      <Banner
        bannerItem={
          dataNowPlaying?.results[
            Math.floor(Math.random() * dataNowPlaying?.results.length)
          ] as IMovie
        }
      />
      {isLoadingTrending && <SkeletonTrending />}
      {errorTrending && (
        <div className="error">
          <h1 className="text-danger">Error</h1>
        </div>
      )}
      <Trending dataTrending={dataTrending} />

      {isLoadingRated && <SkeletonMovieList />}
      {errorRated && (
        <div className="text-center">
          <h1 className="text-danger">Error</h1>
        </div>
      )}
      {isLoadingUpcoming && <SkeletonMovieList />}
      {errorUpcoming && (
        <div className="text-center">
          <h1 className="text-danger">Error</h1>
        </div>
      )}
      {isLoadingPopular && <SkeletonMovieList />}
      {errorPopular && (
        <div className="text-center">
          <h1 className="text-danger">Error</h1>
        </div>
      )}
      {isLoadingNowPlaying && <SkeletonMovieList />}
      {errorNowPlaying && (
        <div className="text-center">
          <h1 className="text-danger">Error</h1>
        </div>
      )}

      <MovieList data={dataRated} title="Rated" path="/top_rated" />
      <MovieList data={dataUpcoming} title="Upcoming" path="/upcoming" />
      <MovieList
        data={dataNowPlaying}
        title="Now Playing"
        path="/now_playing"
      />
      <MovieList data={dataPopular} title="Popular" path="/popular" />
    </>
  );
};

export default Home;
