import { configureStore } from '@reduxjs/toolkit'
import { homeApi } from './pages/home/home.service'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { detailApi } from './pages/detail/detail.service'
import themeReducer from './theme.slice'
export const store = configureStore({
  reducer: {
     [homeApi.reducerPath]: homeApi.reducer,
     [detailApi.reducerPath]: detailApi.reducer,
     theme: themeReducer
  },
   middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
        .concat(homeApi.middleware)
        .concat(detailApi.middleware),
})
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch