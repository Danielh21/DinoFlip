import { configureStore } from '@reduxjs/toolkit'
import GameSlice from '../Slice/GameSlice'
import userSlice from '../Slice/UserSlice'

export const store =  configureStore({
  reducer: {
    userSlice,
    GameSlice
  } 
})

// store.subscribe(() => {
//   saveState(store.getState); TODO - Persits some storage https://stackoverflow.com/questions/37195590/how-can-i-persist-redux-state-tree-on-refresh
// })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch