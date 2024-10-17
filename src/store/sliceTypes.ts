export interface Joke {
  id: string;
  title: string;
  liked: boolean;
}

export interface JokesState {
  jokesHistory: Joke[];
  lastFetchData: Date | null;
}
