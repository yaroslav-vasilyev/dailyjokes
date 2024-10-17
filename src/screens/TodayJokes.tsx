import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "../api/fetchJoke";
import { AppDispatch, AppState } from "../store/store";
import isNewDay from "../helpers/isNewDay";
import { setLastFetchData } from "../store/jokesSlice";

const TodayJokesScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const jokesHistory = useSelector((state: AppState) => state.jokes.jokesHistory);
  const lastFetchData = useSelector((state: AppState) => state.jokes.lastFetchData);
  const joke = jokesHistory[0];

  useEffect(() => {
    if (lastFetchData) {
      if (isNewDay(lastFetchData)) {
        dispatch(fetchJoke());
      }
    } else {
      dispatch(fetchJoke());
    }

    dispatch(setLastFetchData(new Date()));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>Today's Jokes</Text>
      {joke ? (
        <Text>{joke.title}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default TodayJokesScreen;
