import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modalSlice'
import deckSlice, { loadDecks } from './features/deckSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    decks: deckSlice
  },
  preloadedState: {
    decks: loadDecks()
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
