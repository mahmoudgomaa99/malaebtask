import {EntityKeys} from '../schema';
import {createSlice} from '@reduxjs/toolkit';
import thunks from './thunks';
import {RootState} from '../store';
import Toast from 'react-native-toast-message';
import {Contact} from 'react-native-contacts';

type TInitialValues = {
  contacts: Contact[];
  selectedContacts: Contact[];
};

const initialValues: TInitialValues = {
  contacts: [],
  selectedContacts: [],
};

const slice = createSlice({
  name: EntityKeys.CONTACTS,
  initialState: initialValues,
  reducers: {
    addSelectedContact: (state, action: {payload: {contact: Contact}}) => {
      console.log('add');

      if (!state.selectedContacts) {
        state.selectedContacts = [action.payload.contact];
        return;
      }
      state.selectedContacts = [
        ...state.selectedContacts,
        action.payload.contact,
      ];
    },
    removeContact: (state, action: {payload: {contact: Contact}}) => {
      console.log('remove');

      state.selectedContacts = state.selectedContacts?.filter(
        item => item.recordID != action.payload.contact.recordID,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(thunks.doGetContacts.fulfilled, (state, action) => {
      state.contacts = action.payload;
    });
    builder.addCase(thunks.doGetContacts.rejected, (state, action) => {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: action.error.message,
      });
    });
  },
});

const Contacts = {
  thunks,
  slice,
  addSelectedContact: slice.actions.addSelectedContact,
  removeSelectedContact: slice.actions.removeContact,
};

export const selectContacts = (state: RootState) => state.contacts.contacts;
export const selectSelectedContacts = (state: RootState) =>
  state.contacts.selectedContacts;
export default Contacts;
