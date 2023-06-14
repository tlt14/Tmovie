import { Link } from "react-router-dom";
import { IResult } from "../../../types/result.type";
import { IMovie } from "../../../types/movie.type";

interface PropsType {
  data: IResult | undefined,
  title: string,
  path: string
}

const MovieList = (props: PropsType) => {
  const { data, title ,path} = props

  return (
    <div className="w-full py-2">
      <div className="flex flex-row justify-between items-center py-2 border-b-2 border-gray-200">
        <p className="text-xl font-[500] dark:text-white " >{title}</p>
        <Link to={path} className="text-white  px-4 py-2 hover:bg-slate-500 rounded ">
          Xem tất cả
        </Link>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-2">
        {
          data?.results?.map((item: IMovie, index: number) => {
            return (
              index < 12 &&
              <div className="col-span-1" key={index}>
                <Link to={`/movie/${item.id}`}>
                  <div className="card">
                    <div className="card2">
                      <img className="w-full h-full object-cover rounded"
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                        alt={item.title} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm dark:text-white font-[500]"> {item.title}</span>
                    {/* <span className="text-sm dark:text-white bg-blue-500 p-2 rounded">8.8</span> */}
                  </div>
                </Link>
              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default MovieList;