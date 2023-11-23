import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  isAuth: boolean
  jwt: string
}

interface InitialState {
  value: AuthState
}

const initialState: InitialState = {
  value: {
    isAuth: false,
    jwt: ''
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
          jwt: action.payload
        }
      }
    }
  }
})

export const { logIn, logOut } = auth.actions
export default auth.reducer
