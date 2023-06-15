import { Link } from "react-router-dom";
import { IMovie } from "../types/movie.type";

interface PropsType {
    bannerItem: IMovie
}
const Banner = (props: PropsType) => {
    const { bannerItem } = props
    return (
        <figure className="relative w-full transition-all duration-300 cursor-pointer ">
            <img className="rounded-lg w-full max-h-96 object-cover" src={`https://image.tmdb.org/t/p/original/${bannerItem?.backdrop_path}`} alt="imagedescription" />
            <figcaption className="absolute px-4 text-lg text-white top-1/3">
                <p className="font-semibold text-xl mb-2">{bannerItem?.title}</p>
                <p>{bannerItem?.overview}</p>
                <Link
                    to={`/movie/${bannerItem?.id}`}
                    className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-sm">
                    Xem ngay
                </Link>
            </figcaption>
        </figure>


    );
};

export default Banner;