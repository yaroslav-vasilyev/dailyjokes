import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

interface Joke {
  id: string;
  title: string;
  liked: boolean;
}

interface JokesState {
  jokesHistory: Joke[];
  lastFetchData: string | null;
}

const initialState: JokesState = {
  jokesHistory: [],
  lastFetchData: null,
};

export const fetchJoke = createAsyncThunk('jokes/fetchJoke', async () => {
  const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=twopart');
  const data = await response.json();
  if (!data.error) {
    const title = `${data.setup} ${data.delivery}`;
    return { id: uuidv4(), title, liked: false };
  } else {
    throw new Error('Error while getting joke');
  }
});

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
    addJokeToHistory(state, action: PayloadAction<Joke>) {
      state.jokesHistory.push(action.payload);
    },
    setLastFetchData(state, action: PayloadAction<string>) {
      state.lastFetchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchJoke.fulfilled, (state, action: PayloadAction<Joke>) => {
      state.jokesHistory.push(action.payload);
    });
  },
});

export const { likeJoke, addJokeToHistory, setLastFetchData } = jokesSlice.actions;
export const jokesReducer = jokesSlice.reducer;
