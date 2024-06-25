import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface Deck{
  id: string, // Используем string для id
  title: string
}
interface DeckState {
  decks: Deck[]
}
const initialState: DeckState = {
  decks: []
}

export const deckSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    addNewDeck: (state, action: PayloadAction<Deck>) => {
      state.decks.push(action.payload)
      localStorage.setItem('decks', JSON.stringify(state.decks));
    },
    removeDeck: (state, action: PayloadAction<string>) => {
      state.decks = state.decks.filter((item) => item.id !== action.payload)
      localStorage.setItem('decks', JSON.stringify(state.decks));
    },
  }
})

export const { addNewDeck, removeDeck } = deckSlice.actions
export const selectDeck = (state: RootState) => state.decks.decks

export const loadDecksFromLocalStorage = () => {
  const decks = localStorage.getItem('decks');
  if (decks) {
    return JSON.parse(decks) as Deck[];
  } else {
    return [];
  }
};

export const loadDecks = () => {
  const decks = loadDecksFromLocalStorage();
  return {
    decks,
  };
};

export default deckSlice.reducer
