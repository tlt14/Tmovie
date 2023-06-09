import { Link } from "react-router-dom";
import Slider from "react-slick";
import { ITrailer, ITrailerResult } from "../../../../types/trailer.type";

interface PropsType {
    dataTrailer: ITrailerResult
}
const Trailer = (props: PropsType) => {
    const { dataTrailer } = props
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical: false,
    };

    return (
        <div className="w-full mt-5">

            <div className="font-[700] dark:text-white text-xl mb-2">
                Xem thêm trailer
            </div>
            <Slider
                {...settings}
            >
                {
                    dataTrailer?.results?.map((item: ITrailer) => (
                        <div key={item.id} className="px-2">
                            <Link to={`?key=${item.key}`}>
                                <img className="object-cover w-full rounded " src={`https://i3.ytimg.com/vi/${item.key}/maxresdefault.jpg`} alt="" />
                                <p className="font-[500] dark:text-white text-sm w-full overflow-clip truncate ">{item.name}</p>
                            </Link>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Trailer;