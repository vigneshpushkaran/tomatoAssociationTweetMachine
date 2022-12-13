import { createSlice } from '@reduxjs/toolkit'

export const inputTweetSlice = createSlice({
    name: 'inputTweet',
    initialState: {
        value: '',
        typing: false
    },
    reducers: {
        setTweetInput: (state, action) => {
            return {
                ...state,
                value: action.payload,
                typing: true
            }
        },
        setUserTypingTweet: (state, action) => {
            return {
                ...state,
                typing: action.payload
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { setTweetInput, setUserTypingTweet } = inputTweetSlice.actions

export default inputTweetSlice.reducer