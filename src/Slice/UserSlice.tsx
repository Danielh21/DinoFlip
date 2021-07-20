import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface UserSlide {
  Name: string,
  isSet: boolean,
  points: number,
  language : string
}

// Define the initial state using that type
const initialState: UserSlide = {
  Name: "null",
  isSet : false,
  points : 0,
  language: 'dk'
}

export const UserSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setName: (state, action : PayloadAction<string>) => {
      state.Name = action.payload;
      state.isSet = true;
    },
    addToPoints : (state, action : PayloadAction<number>) => {
      state.points += action.payload;
    },
    switchLang : (state, action : PayloadAction<string>) => {
      state.language = action.payload;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setName, addToPoints, switchLang } = UserSlice.actions

export default UserSlice.reducer
