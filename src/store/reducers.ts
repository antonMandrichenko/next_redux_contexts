import { combineReducers } from '@reduxjs/toolkit';

import data from './data';


const rootReducer = combineReducers({
  data: data.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;