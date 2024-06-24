import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modalSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']