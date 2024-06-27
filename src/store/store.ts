import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './features/modalSlice'
import deckSlice, { loadDecks } from './features/deckSlice'
import cardSlice, { loadCard } from './features/cardSlice'
import newTitleSlice from './features/newTitleSlice'

export const store = configureStore({
  reducer: {
    modal: modalSlice,
    decks: deckSlice,
    card: cardSlice,
    title: newTitleSlice
  },
  preloadedState: {
    decks: loadDecks(),
    card: loadCard(),
  }
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']



