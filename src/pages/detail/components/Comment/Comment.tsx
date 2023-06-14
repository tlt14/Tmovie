import * as React from 'react';
import { addComment, auth } from '../../../../config/firebase';
import { IComment } from '../../../../types/comment.type';
import { formatTime } from '../../../../utils/formatTime';
import { useEffect, useState } from 'react';


export interface ICommentProps {
    handleComment:(comment: string) => void
    commentList: IComment[],
}

export default function Comment (props: ICommentProps) {
    const [comment,setComment] = useState('') 
    const { handleComment ,commentList} =  props
    const handleAddcomment = () =>{
        setComment("") 
        console.log("comment", comment)
        handleComment(comment)
    }
  return (
    <div className='mt-5'>
      <h2 className='dark:text-white font-[500] text-xl border-b-1 pb-2'>Bình luận <span>{commentList.length|| 0}</span></h2>
      <div className='flex flex-col '>
        {
            commentList &&
            commentList.map((item) => {
                return (
                    <div className='flex  mt-2' key={item.createdAt}>
                    <img className='rounded-full w-12 h-12' src={item.user.photo } alt={item.user.name} loading='lazy' />
                    <div className='dark:text-white px-4'>
                        <p>{item.user.name} <span className='text-gray-600'>{formatTime(item.createdAt)}</span></p>
                        <p className='text-sm'>{item.comment}</p>
                        
                    </div>
                </div>
                )
            })
        }
        
      </div>
      {
        auth.currentUser
        && auth.currentUser.uid
        &&
        <div className='flex gap-2 mt-3 items-center'>
            <img className='rounded-full w-8 h-8' src={auth?.currentUser?.photoURL ?? '' } alt="" loading='lazy' />
            <textarea className='bg-gray-500 rounded-lg outline-none border-none w-11/12 focus:border-none focus:outline-none'
                onChange={(e)=>setComment(e.target.value)}
                value={comment}
                onKeyUp={
                    (e) => {
                        if (e.key === 'Enter') {
                            handleAddcomment()
                        }
                    }
                }
            ></textarea>
            <button className='w-1/12 dark:text-blue-500'
                onClick={handleAddcomment}
            >Gửi</button>
        </div>
      }
    </div>
  );
}
