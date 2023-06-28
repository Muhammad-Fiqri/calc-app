import { createSlice } from '@reduxjs/toolkit'
import nerdamer from 'nerdamer';

export const CalcReducer = createSlice({
  name: 'calc',
  initialState: {
    value: '1+2',
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
    DeleteOutput: (state) => {
        state.value = state.value.slice(0,state.value.length-1);
    }
  },
})

// Action creators are generated for each case reducer function
export const { ChangeOutput, AddOutput, CalculateOutput, DeleteOutput } = CalcReducer.actions

export default CalcReducer.reducer