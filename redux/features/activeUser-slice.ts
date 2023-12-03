import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import type { User } from '@/models/User'
import GetUserInfo from '@/services/GetUser'

interface InitialState {
  activeUser: User
}

const nullUser = {
  id: 0,
  firstName: '',
  lastName: '',
  mail: '',
  birthDate: '',
  phone: '',
  role: 'USER',
  documentType: '',
  documentNumber: ''
}

const storedUserJson = typeof window !== 'undefined' ? window.sessionStorage.getItem("user"): ""
const storedUser = storedUserJson ? JSON.parse(storedUserJson) : null;

const initialState: InitialState = {
  activeUser: storedUser || nullUser
};

export const userInfo = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    clearUser: (state) => {
      localStorage.removeItem('token')
      sessionStorage.removeItem('user')
      return {
        activeUser: nullUser,
      }
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
