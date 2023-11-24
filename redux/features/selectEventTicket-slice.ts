import { Ticket } from '@/models/Ticket'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface TicketEvent {
  ticket: Ticket
}

const initialState: TicketEvent = {
  ticket: {
    id: 0,
    dateTime: {
      id: 0
    },
    ticketType: {
      id: 0
    },
    event: {
      id: 0
    },
    idUser: 0
  }
}

export const selectedTicket = createSlice({
  name: 'selectedTicket',
  initialState,
  reducers: {
    setSelectedTicket: (state, action:PayloadAction<Ticket>) => {
      state.ticket = {
        ...state.ticket,
        ...action.payload
      }
    },
    clearSelectedTicket: () => {
      return initialState
    }
  }
})

export const { setSelectedTicket, clearSelectedTicket } = selectedTicket.actions
export default selectedTicket.reducer
