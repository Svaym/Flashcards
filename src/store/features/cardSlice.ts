import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface Card{
  id: number,
  uniqueValue: string,
  title: string,
  translatedTitle: string
}
interface CardState {
  cards: Card[]
}
const initialState: CardState = {
  cards: []
}
const LOCAL_STORAGE = 'cards'
export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    addNewCard: (state, action: PayloadAction<Card>) => {
      state.cards.push(action.payload)
      localStorage.setItem(LOCAL_STORAGE, JSON.stringify(state.cards));
    },
    removeCard: (state, action: PayloadAction<number>) => {
      state.cards = state.cards.filter((item) => item.id !== action.payload)
      localStorage.setItem(LOCAL_STORAGE, JSON.stringify(state.cards));
    },
  }
})

export const { addNewCard, removeCard } = cardSlice.actions
export const selectCard = (state: RootState) => state.card.cards

export const loadCardsFromLocalStorage = () => {
  const cards = localStorage.getItem(LOCAL_STORAGE)
  if (cards) {
    return JSON.parse(cards) as Card[]
  } else {
    return []
  }
}
export const loadCard = () => {
  const cards = loadCardsFromLocalStorage()
  return {
    cards
  }
}
export default cardSlice.reducer

