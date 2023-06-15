import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { homeApi } from '../../services/home.service'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

interface HomeState {
  data: []
}

const initialState: HomeState = {
  data: []
}

const homeSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
  }
})

const homeReducer = homeSlice.reducer
export const { } = homeSlice.actions
export default homeReducer