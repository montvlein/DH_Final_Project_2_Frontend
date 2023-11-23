import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { User } from '@/models/User'

interface InitialState {
  activeUser: User
}

const initialState: InitialState = {
  activeUser: {
    id: 0,
    firstName: '',
    lastName: '',
    mail: '',
    birthDate: '',
    phone: '',
    role: '',
    documentType: '',
    documentNumber: ''
  }
}

export const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    clearUser: (state) => {
      state.activeUser = initialState.activeUser
      sessionStorage.removeItem('user')
      console.log(state)
      return initialState
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.activeUser = {
        ...state.activeUser,
        ...action.payload
      }
      sessionStorage.setItem('user', JSON.stringify(state.activeUser))
    }
  }
})

export const { clearUser, setUser } = userInfo.actions
export default userInfo.reducer
