import { createSlice } from '@reduxjs/toolkit';

// Define initial state with two keys
const initialState = {
  title: '',
  message: ''
};

// Create the slice with the appropriate name, initial state, and reducers
export const titleAndMessageSlice = createSlice({
  name: 'titleAndMessage', // Slice name reflects the state keys
  initialState, // Initial state with title and message
  reducers: {
    setTitleAndMessage: (state, action) => {
      state.title = action.payload.title; // Assigns the new title
      state.message = action.payload.message; // Assigns the new message
    },
  },
});

// Export the action creators and the reducer
export const { setTitleAndMessage } = titleAndMessageSlice.actions;

export default titleAndMessageSlice.reducer;
