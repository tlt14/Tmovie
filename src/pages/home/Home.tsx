import Banner from "../../components/Banner";
import { IMovie } from "../../types/movie.type";
import MovieList from "./components/MovieList";
import Trending from "./components/Trending";
import { useGetMovieRatedQuery, useGetTrendingQuery, useGetMovieUpcomingQuery, useGetNowPlayingQuery, useGetPopularQuery } from "./home.service";
const Home = () => {
    const { data: dataTrending, isLoading: isLoadingTrending, error: errorTrending } = useGetTrendingQuery();
    const { data: dataRated, isLoading: isLoadingRated, error: errorRated } = useGetMovieRatedQuery();
    const { data: dataUpcoming, isLoading: isLoadingUpcoming, error: errorUpcoming } = useGetMovieUpcomingQuery()
    const { data: dataNowPlaying, isLoading: isLoadingNowPlaying, error: errorNowPlaying } = useGetNowPlayingQuery();
    const { data: dataPopular, isLoading: isLoadingPopular, error: errorPopular } = useGetPopularQuery();
    return (
        <>
            <Banner bannerItem={dataNowPlaying?.results[Math.floor(Math.random() * dataNowPlaying?.results.length)] as IMovie} />
            <Trending dataTrending={dataTrending} />
            <MovieList data={dataRated} title="Rated" />
            <MovieList data={dataUpcoming} title="Upcoming" />
            <MovieList data={dataNowPlaying} title="Now Playing" />
            <MovieList data={dataPopular} title="Popular" />
        </>
    );
};

export default Home;