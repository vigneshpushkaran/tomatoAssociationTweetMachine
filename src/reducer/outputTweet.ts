import { createSlice } from '@reduxjs/toolkit'

export const outputTweetSlice = createSlice({
  name: 'outputTweet',
  initialState: {
    value: ''
  },
  reducers: {
    setTweetOutput: (state,action) => {
       return{
        ...state,
        value: action.payload.value
       }
    }
  }
})

// Action creators are generated for each case reducer function
export const { setTweetOutput } = outputTweetSlice.actions

export default outputTweetSlice.reducer