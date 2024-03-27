import { createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: [],
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
      console.log(action);
    },
    filterContact(state, action) {},
  },
});

export const { addContact, removeContact, filterContact } =
  contactSlice.actions;

export default contactSlice.reducer;
