import type { contactType, contactsType } from '@/utils/types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '@/redux/contactsOps';
import { stat } from 'fs';

const initialState: contactsType = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    contactAdded(state, action) {
      if (
        state.items.find(
          (contact: contactType) =>
            contact.name.toLowerCase().trim() ===
            action.payload.name.toLowerCase().trim()
        )
      ) {
        alert('name already existes in the list');
        return state;
      }
      return { ...state, items: [...state.items, action.payload] };
    },

    contactRemoved(state, action) {
      return {
        ...state,
        items: state.items.filter(
          (item: contactType) => item.id !== action.payload
        ),
      };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = null;
        newState.items = [...action.payload];
        return newState;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log(action.error); // ???
      })

      .addCase(addContact.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        const newState = { ...state };
        newState.loading = false;
        newState.error = null;
        newState.items.push(action.payload);
        return newState;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
        console.log(action.error); // ???
      });
  },
});

export default contactsSlice.reducer;
export const { contactAdded, contactRemoved } = contactsSlice.actions;
