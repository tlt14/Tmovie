import axios from "axios";
import { useEffect } from "react";
import DetailMovie from "./components/DetailMovie";
import Propose from "./components/Propose";
import { useParams } from "react-router-dom";
import { useGetDetailMovieQuery, useGetRecommendationsQuery, useGetTrailerQuery } from "./detail.service";
import Trailer from "./components/Trailer";


const Detail = () => {
    const { id } = useParams();
    const { data } = useGetDetailMovieQuery(id);
    const { data: recommendations } = useGetRecommendationsQuery(id);
    const { data: dataTrailer } = useGetTrailerQuery(id);
    return (
        <>
            <DetailMovie data={data}>
                <Trailer dataTrailer={dataTrailer} />
            </DetailMovie>
            <Propose recommendations={recommendations} />
        </>
    );
};

export default Detail;