import { createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const nanoid = customAlphabet('1234567890abcdef', 10);
      let id = nanoid(5);
      const newContact = {
        id,
        name: action.payload.name,
        number: action.payload.number,
      };

      state.contacts.push(newContact);
    },
    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, removeContact, filterContact } =
  contactSlice.actions;

export default contactSlice.reducer;
