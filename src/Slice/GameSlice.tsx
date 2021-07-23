import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardContent } from '../Models/CardContent';

interface iFlippedAction {
  card : CardContent
}


// Define a type for the slice state
interface IGameSlice {
  flipped: boolean,
  cardFlipped : CardContent | null
}

// Define the initial state using that type
const initialState: IGameSlice = {
  flipped : false,
  cardFlipped : null
}

export const GameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    cardSelected: (state, action : PayloadAction<iFlippedAction>) => {
      if(state.flipped) {
        state.flipped = false;
        state.cardFlipped = null
      }
      else {
        state.flipped = true;
        state.cardFlipped = action.payload.card
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { cardSelected } = GameSlice.actions

export default GameSlice.reducer
