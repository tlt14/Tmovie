import DetailMovie from "./components/DetailMovie";
import Propose from "./components/Propose";
import { useParams } from "react-router-dom";
import { useGetDetailMovieQuery, useGetRecommendationsQuery, useGetTrailerQuery } from "../../services/detail.service";
import Trailer from "./components/Trailer";
import Comment from "./components/Comment";
import { addComment, getComments } from "../../config/firebase";
import { useEffect, useState } from 'react';
import { IComment } from "../../types/comment.type";
import {  toast } from 'react-toastify';

const Detail = () => {
    const { id } = useParams();
    const { data } = useGetDetailMovieQuery(id);
    const { data: recommendations } = useGetRecommendationsQuery(id);
    const { data: dataTrailer } = useGetTrailerQuery(id);
    console.log(id)

    const [commentList,setCommentList] = useState<IComment[]>([])

    const handleComment = (comment:string)=>{
        id && addComment(id,comment).then(()=>{
            toast.success('thêm comment thành công');
        }).catch(()=>{
            toast.error('thêm comment thất bại');
        })
    }
    useEffect(()=>{
        if(id){
            getComments(id,(comments:IComment[])=>{
                setCommentList(comments)
            })
        }
        return ()=>{
            setCommentList([])
        }
    },[id])
    return (
        <>
            <DetailMovie data={data}>
                <>
                <Trailer dataTrailer={dataTrailer} />
                <Comment  
                    handleComment={handleComment} 
                    commentList={commentList}
                />
                </>
            </DetailMovie>
            <Propose recommendations={recommendations} />
        </>
    );
};

export default Detail;