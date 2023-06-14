import Banner from "../../components/Banner";
import { IMovie } from "../../types/movie.type";
import MovieList from "./components/MovieList";
import Trending from "./components/Trending";
import { useGetMovieRatedQuery, useGetTrendingQuery, useGetMovieUpcomingQuery, useGetNowPlayingQuery, useGetPopularQuery } from "./home.service";
const Home = () => {
    const { data: dataTrending, isLoading: isLoadingTrending, error: errorTrending } = useGetTrendingQuery(1);
    const { data: dataRated, isLoading: isLoadingRated, error: errorRated } = useGetMovieRatedQuery(1);
    const { data: dataUpcoming, isLoading: isLoadingUpcoming, error: errorUpcoming } = useGetMovieUpcomingQuery(1)
    const { data: dataNowPlaying, isLoading: isLoadingNowPlaying, error: errorNowPlaying } = useGetNowPlayingQuery(1);
    const { data: dataPopular, isLoading: isLoadingPopular, error: errorPopular } = useGetPopularQuery(1);
    return (
        <>
            <Banner bannerItem={dataNowPlaying?.results[Math.floor(Math.random() * dataNowPlaying?.results.length)] as IMovie} />
            <Trending dataTrending={dataTrending} />
            <MovieList data={dataRated} title="Rated" path='/top_rated'/>
            <MovieList data={dataUpcoming} title="Upcoming" path='/upcoming' />
            <MovieList data={dataNowPlaying} title="Now Playing" path='/now_playing'/>
            <MovieList data={dataPopular} title="Popular" path='/popular'/>
        </>
    );
};

export default Home;