import { createSlice } from '@reduxjs/toolkit'
import nerdamer from 'nerdamer';

export const CalcReducer = createSlice({
  name: 'calc',
  initialState: {
    value: '',
  },
  reducers: {
    AddOutput: (state, action) => {
        state.value += action.payload;
    },
    ChangeOutput: (state, action) => {
        state.value = action.payload;
    },
    CalculateOutput: (state) => {
        let result = nerdamer(state.value);
        state.value = result.text();
    },
  },
})

// Action creators are generated for each case reducer function
export const { ChangeOutput, AddOutput, CalculateOutput } = CalcReducer.actions

export default CalcReducer.reducer