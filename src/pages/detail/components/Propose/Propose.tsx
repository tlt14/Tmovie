import { Link } from "react-router-dom";
import { IResult } from "../../../../types/result.type";
import { IMovie } from "../../../../types/movie.type";

interface PropsTypes {
    recommendations: IResult;
}
const Propose = ({ recommendations }: PropsTypes) => {

    return (
        <div className="col-span-3">
            <div className="border-b-2">
                <p className="py-2 font-[700] dark:text-white">Đề xuất cho bạn</p>
            </div>
            <div className="flex-col flex">
                {
                    recommendations?.results?.map((item: IMovie) => (
                        item.backdrop_path &&
                        <Link to={`/movie/${item?.id}`} key={item?.id}>
                            <div className="item flex mt-2">
                                <img className="object-cover w-1/2 rounded " src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
                                <div className="ml-2">
                                    <p className="font-[700] dark:text-white text-sm">{item.title}</p>
                                    <p className="dark:text-blue-500 text-sm">{item.vote_average.toFixed(2)}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                {/* <Link to="/propose">
                    <div className="item flex mt-2">
                        <img className="object-cover w-1/2 rounded " src={`https://image.tmdb.org/t/p/w500/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg`} alt="" />
                        <div className="ml-2">
                            <p className="font-[700] dark:text-white">Đề xuất cho bạn</p>
                            <p className="dark:text-blue-500">Đề xuất cho bạn</p>
                        </div>
                    </div>
                </Link> */}
            </div>
        </div>
    );
};

export default Propose;