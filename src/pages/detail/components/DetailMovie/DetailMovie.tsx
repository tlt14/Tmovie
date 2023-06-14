import { Link, useLocation } from "react-router-dom";
import { IDetail } from "../../../../types/detail.type"
import React from 'react'

interface DetailMovieProps {
    data: IDetail;
    children: JSX.Element
}

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}
export default function DetailMovie({ data, children }: DetailMovieProps) {
    const query = useQuery();
    const key = query.get("key");
    return (
        <div className="col-span-9">
            <div className="">
                {
                    key && <iframe width="870" height="490" src={`https://www.youtube.com/embed/${key}`} title={"123"} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                }
                {
                    !key && data?.id && <iframe className="rounded" width="100%" height="500px" src={`https://www.2embed.to/embed/tmdb/movie?id=${data?.id}`} title="Cấu hình Router và xây dựng cơ chế tải Layout cho dự án Tiktok tại F8" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                }
            </div>
            <div className="content dark:text-white">
                <h1 className="text-2xl font-bold py-2">{data?.title}</h1>
                <div className="flex items-center gap-2 pb-2">
                    <img
                        className="object-cover w-14 h-14 rounded-full"
                        src={`https://image.tmdb.org/t/p/w500/${data?.belongs_to_collection?.poster_path || data?.backdrop_path} `}
                        alt={data?.belongs_to_collection?.name} />
                    <span >{data?.belongs_to_collection?.name || data?.title}</span>
                </div>
                <p className="py-2">
                    Release Date: {data?.release_date}
                </p>
                <p className="py-2">
                    Gennes:
                    {
                        data?.genres?.map((genre) => (
                            <Link to="/" className="text-blue-500 ml-5" key={genre?.id}>{genre?.name}</Link>
                        ))
                    }

                </p>
                <p className="py-2">
                    {data?.overview}
                </p>
            </div>
            {children}
        </div>
    );
}