import {createAsyncThunk} from '@reduxjs/toolkit';
import Contacts from 'react-native-contacts';

export const doGetContacts = createAsyncThunk<any, undefined, any>(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await Contacts.getAll();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const thunks = {
  doGetContacts,
};

export default thunks;
