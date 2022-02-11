import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
 myCount: 0,
}

export const MycounterSlice = createSlice({
 name: 'MycounterSlice',
 initialState: initialStateValue,
 reducers: {
  increment: (state) => {
   state.myCount += 1
  },
  decrement: (state) => {
   state.myCount -= 1
  },
  incrementByAmount: (state, action) => {
   state.myCount += action.payload
  },
 },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = MycounterSlice.actions

export default MycounterSlice.reducer