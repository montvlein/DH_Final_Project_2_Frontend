import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import userInfoReducer  from './features/activeUser-slice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    authReducer,
    userInfo: userInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const userUseSelector: TypedUseSelectorHook<RootState> = useSelector