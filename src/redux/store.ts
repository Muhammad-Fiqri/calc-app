import { configureStore } from '@reduxjs/toolkit'
import CalcReducer from './CalcReducer'

export default configureStore({
  reducer: {
    calc : CalcReducer,
  },
})