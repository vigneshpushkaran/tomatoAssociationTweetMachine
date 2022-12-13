import { configureStore } from '@reduxjs/toolkit';
import  inputTweetReducer  from './reducer/inputTweet';
import outputTweetReducer from './reducer/outputTweet';

export default configureStore({
  reducer: {
    inputTweet : inputTweetReducer,
    outputTweet : outputTweetReducer
  }
})