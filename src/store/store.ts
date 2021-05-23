import { configureStore } from '@reduxjs/toolkit';
import Timelines from './libs/storeSlice'

const store = configureStore({
  reducer: {
    Timelines
  }
})


export default store;