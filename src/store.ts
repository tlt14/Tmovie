import { configureStore } from '@reduxjs/toolkit'
import { homeApi } from './services/home.service'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { detailApi } from './services/detail.service'
import themeReducer from './theme.slice'
import { searchApi } from './services/search.service'
import searchReducer from './pages/search/search.slice'
export const store = configureStore({
  reducer: {
     [homeApi.reducerPath]: homeApi.reducer,
     [detailApi.reducerPath]: detailApi.reducer,
     [searchApi.reducerPath]: searchApi.reducer,
     theme: themeReducer,
     search: searchReducer,
  },
   middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
        .concat(homeApi.middleware)
        .concat(detailApi.middleware)
        .concat(searchApi.middleware)
        ,
})
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch