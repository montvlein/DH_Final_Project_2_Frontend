import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuth: boolean
  username: string
}

interface InitialState {
  value: AuthState
}

const initialState: InitialState = {
  value: {
    isAuth: false,
    username: ''
  }
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: () => {
      return initialState
    },
    logIn: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload
        }
      }
    }
  }
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
