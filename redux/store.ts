import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth-slice'
import modalReducer from './features/modal-slice'

export const store = configureStore({
  reducer: {
    authReducer,
    modal: modalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
