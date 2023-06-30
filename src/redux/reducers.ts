import {combineReducers} from '@reduxjs/toolkit';
import Contacts from './contacts';
import loadingSlice from './_loading';

const combinedReducer = combineReducers({
  _loading: loadingSlice.reducer,
  [Contacts.slice.name]: Contacts.slice.reducer,
});

export default combinedReducer;
