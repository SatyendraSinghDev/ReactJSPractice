import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
 color: "",
}

export const mythemeSlice = createSlice({
 name: 'mythemeSlice',
 initialState: initialStateValue,
 reducers: {
  changeTextColor: (state, action) => {
   state.color = action.payload
  },
 },
})

// Action creators are generated for each case reducer function
export const { changeTextColor } = mythemeSlice.actions

export default mythemeSlice.reducer