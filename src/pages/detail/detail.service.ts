import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IDetail } from '../../types/detail.type'
import { IResult } from '../../types/result.type'
import { ITrailerResult } from '../../types/trailer.type'



export const detailApi: any = createApi({
  reducerPath: 'detailApi', // Tên field trong Redux state
    //   tagTypes: ['Home'], // Những kiểu tag cho phép dùng trong blogApi
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (build) => ({
    getDetailMovie: build.query<IDetail, string>({
      query: (id) => `movie/${id}?api_key=8287e9579c6793c1666ed6cab3277796&language=vi`
    }),
    getRecommendations: build.query<IResult, string>({
      query: (id) => `movie/${id}/recommendations?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=1`
    }),
    getTrailer:build.query<ITrailerResult,string>({
      query: (id) => `movie/${id}/videos?api_key=8287e9579c6793c1666ed6cab3277796`
    })
  })
})

export const { useGetDetailMovieQuery  , useGetRecommendationsQuery, useGetTrailerQuery} =detailApi