import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IResult } from '../../types/result.type'



export const homeApi = createApi({
  reducerPath: 'homeApi', // Tên field trong Redux state
//   tagTypes: ['Home'], // Những kiểu tag cho phép dùng trong blogApi
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (build) => ({
    // Generic type theo thứ tự là kiểu response trả về và argument
    getTrending: build.query<IResult, void>({
      query: () => 'trending/all/day?api_key=8287e9579c6793c1666ed6cab3277796&page=1&language=vi', // method không có argument
    }),
    getMovieRated: build.query<IResult, void>({
      query: () => 'movie/top_rated?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=1',
    }),
    getMovieUpcoming: build.query<IResult, void>({
      query: () => 'movie/upcoming?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=1',
    }),
    getNowPlaying: build.query<IResult,void>({
      query: () => 'movie/now_playing?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=1',
    }),
    getPopular:build.query<IResult,void>({
      query: () => 'movie/popular?api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=1',
    })
    
  })
})

export const { useGetTrendingQuery, useGetMovieRatedQuery , useGetMovieUpcomingQuery ,useGetNowPlayingQuery, useGetPopularQuery} =homeApi