import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CardContent } from '../Models/CardContent';

interface iFlippedAction {
  selectedIdentifier: number,
  index: number | null
}


// Define a type for the slice state
interface IGameSlice {
  firstCardFlipped: iFlippedAction | null,
  secondCardFlipped : iFlippedAction | null,
  twoCardsFlipped : boolean
}

// Define the initial state using that type
const initialState: IGameSlice = {
  firstCardFlipped: null,
  secondCardFlipped: null,
  twoCardsFlipped : false
}

export const GameSlice = createSlice({
  name: 'Game',
  initialState,
  reducers: {
    firstCardSelected: (state, action: PayloadAction<iFlippedAction>) => {
      state.firstCardFlipped = {
        selectedIdentifier: action.payload.selectedIdentifier,
        index: action.payload.index
      }
    },
    secondCardSelected: (state, action: PayloadAction<iFlippedAction>) => {
      state.secondCardFlipped = {
        selectedIdentifier: action.payload.selectedIdentifier,
        index: action.payload.index
      }
      state.twoCardsFlipped = true
    },
    resetState: (state, action : PayloadAction<any>) => {
      state = initialState
    }
  }
})

// Action creators are generated for each case reducer function
export const { firstCardSelected, secondCardSelected  } = GameSlice.actions

export default GameSlice.reducer
