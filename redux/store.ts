import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import modalReducer from './features/modal-slice'
import userInfoReducer from './features/activeUser-slice'
import type { TypedUseSelectorHook } from 'react-redux'
import { useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    authReducer,
    modal: modalReducer,
    userInfo: userInfoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const userUseSelector: TypedUseSelectorHook<RootState> = useSelector
