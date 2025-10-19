import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://68f4d3d7b16eb6f468359b36.mockapi.io/';

const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async function (_, thunkAPI) {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      // console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const addContact = createAsyncThunk(
  'contacts/addContact',
  async function (newContact, thunkAPI) {
    try {
      const res = axios.post('/contacts', newContact);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async function (ID: number) {
    // await axios.get();
  }
);

export { fetchContacts, addContact, deleteContact };
