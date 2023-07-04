import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper';

import rootReducer from './reducers'

const makeStore = () => configureStore({
  reducer: rootReducer,
  devTools: true
},)

const store = makeStore()

export type AppState = ReturnType<typeof rootReducer>;



export type AppDispatch = typeof store.dispatch

export default store;

export const wrapper = createWrapper(makeStore);