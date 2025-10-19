import { createSlice } from '@reduxjs/toolkit';
import type { filterType } from '@/utils/types';

const initialState: filterType = {
  value: '',
};

const filterReducer = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilterValue(_, action) {
      return { value: action.payload };
    },
  },
});

export default filterReducer.reducer;
export const { setFilterValue } = filterReducer.actions;
