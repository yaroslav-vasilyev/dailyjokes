import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchJoke } from '../api/fetchJoke';
import { Joke, JokesState } from './sliceTypes';

const initialState: JokesState = {
  jokesHistory: [],
  lastFetchData: null,
};


const jokesSlice = createSlice({
  name: 'jokes',
  initialState,
  reducers: {
    likeJoke(state, action: PayloadAction<string>) {
      const joke = state.jokesHistory.find((currentJoke) => currentJoke.id === action.payload);
      if (joke) {
        joke.liked = !joke.liked;
      }
    },
    setLastFetchData(state, action: PayloadAction<number>) {
      state.lastFetchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJoke.fulfilled, (state, action: PayloadAction<Joke>) => {
      state.jokesHistory.push(action.payload);
    });
  },
});

export const { likeJoke, setLastFetchData } = jokesSlice.actions;
export const jokesReducer = jokesSlice.reducer;
