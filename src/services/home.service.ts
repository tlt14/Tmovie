import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IResult } from '../types/result.type'



export const homeApi = createApi({
  reducerPath: 'homeApi', // Tên field trong Redux state
//   tagTypes: ['Home'], // Những kiểu tag cho phép dùng trong blogApi
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (build) => ({
    // Generic type theo thứ tự là kiểu response trả về và argument
    getTrending: build.query<IResult, number>({
      query: (page) => `trending/all/day?api_key=8287e9579c6793c1666ed6cab3277796&page=${page}&language=vi`, // method không có argument
    }),
    getMovieRated: build.query<IResult, number>({
      query: (page) => `movie/top_rated?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=${page}`,
    }),
    getMovieUpcoming: build.query<IResult, number>({
      query: (page) => `movie/upcoming?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=${page}`,
    }),
    getNowPlaying: build.query<IResult,number>({
      query: (page) => `movie/now_playing?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=${page}`,
    }),
    getPopular:build.query<IResult,number>({
      query: (page) => `movie/popular?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=${page}`,
    })
    
  })
})

export const { useGetTrendingQuery, useGetMovieRatedQuery , useGetMovieUpcomingQuery ,useGetNowPlayingQuery, useGetPopularQuery} =homeApi