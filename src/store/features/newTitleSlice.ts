import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface TitleState {
  newTitle: string
}

const initialState: TitleState = {
  newTitle: ''
}

export const newTitleSlice = createSlice({
  name: 'title',
  initialState,
  reducers: {
    changeTitle: (state, action: PayloadAction<string>) => {
      state.newTitle = action.payload
    },
  }
})

export const { changeTitle } = newTitleSlice.actions
export const selectTitle = (state: RootState) => state.title.newTitle
export default newTitleSlice.reducer