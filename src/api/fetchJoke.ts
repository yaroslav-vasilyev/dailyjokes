import { createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const API_URL = 'https://v2.jokeapi.dev/joke/Programming';

export const fetchJoke = createAsyncThunk('jokes/fetchJoke', async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  let title = '';

  if (!data.error) {
    if (data.setup && data.delivery) {
      title = `${data.setup} ${data.delivery}`;
    } else if (data.joke) {
      title = data.joke;
    }

    return { id: uuidv4(), title, liked: false };
  } else {
    throw new Error('Error while getting joke');
  }
});
