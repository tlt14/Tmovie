import { Link } from "react-router-dom";
import { IResult } from "../../../types/result.type";
import { IMovie } from "../../../types/movie.type";

interface TypeProps {
  dataTrending: IResult | undefined
}
const Trending = (props: TypeProps) => {
  const { dataTrending } = props
  return <div className="w-full py-2">
    <div className="flex flex-row justify-between items-center py-2 border-b-2 border-gray-200">
      <p className="text-xl font-[500] dark:text-white " >Trending</p>
      <Link to="/trending" className="text-white  px-4 py-2 hover:bg-slate-500 rounded ">
        Xem tất cả
      </Link>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-2">
      {
        dataTrending?.results?.map((item: IMovie, index: number) => {
          return (
            index < 6 &&
            <div className="col-span-1 " key={item.id}>
              <Link to="">
                <div className="card">
                  <div className="card2">
                    <img className="w-full max-h-56 object-cover rounded"
                      src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      alt="" />
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm dark:text-white font-[500]"> {item.title || item.name} </span>
                  <span className="text-sm dark:text-white bg-blue-500 p-2 rounded">{item.vote_average}</span>
                </div>
              </Link>
            </div>)
        })
      }

    </div>
  </div>
}

export default Trending;