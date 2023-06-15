import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IResult } from '../types/result.type'
import { IGenres } from '../types/genres.type'




export const searchApi = createApi({
  reducerPath: 'searchApi', // Tên field trong Redux state
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/',
  }),
  endpoints: (build) => ({
    searchMovie: build.query<IResult, string>({
      query: (key) => `search/movie?query=${key}&include_adult=false&api_key=8287e9579c6793c1666ed6cab3277796&language=vi&page=1`
    }),
    getGenre: build.query<IGenres,void>({
      query: () => `genre/movie/list?api_key=8287e9579c6793c1666ed6cab3277796&language=vi`
    })
    
  })
})

export const { useSearchMovieQuery, useGetGenreQuery} =searchApi