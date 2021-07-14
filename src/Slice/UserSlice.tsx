import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// Define a type for the slice state
interface UserSlide {
  Name: string,
  isSet: boolean
}

// Define the initial state using that type
const initialState: UserSlide = {
  Name: "null",
  isSet : false
}

export const UserSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setName: (state, action : PayloadAction<string>) => {
      state.Name = action.payload;
      state.isSet = true;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setName } = UserSlice.actions

export default UserSlice.reducer
