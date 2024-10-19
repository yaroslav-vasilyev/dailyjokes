import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "../api/fetchJoke";
import isNewDay from "../helpers/isNewDay";
import { likeJoke, setLastFetchData } from "../store/jokesSlice";
import { AppDispatch, AppState } from "../store/store";
import ButtonLike from "./ButtonLike";
import MainScreenWrapper from "./MainScreenWrapper";
import ShareIcon from "../assets/share";
import ButtonShare from "./ButtonShare";

const TodayJokesScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const jokesHistory = useSelector((state: AppState) => state.jokes.jokesHistory);
  const lastFetchData = useSelector((state: AppState) => state.jokes.lastFetchData);
  const joke = jokesHistory[0];
  const { title, id, liked } = joke;

  useEffect(() => {
    const currentTime = new Date().getTime();

    if (!lastFetchData || isNewDay(lastFetchData)) {
      dispatch(fetchJoke());
      dispatch(setLastFetchData(currentTime));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainScreenWrapper title="Today">
      <View style={{ justifyContent: 'center', flex: 1, gap: 16 }}>
        {joke ? (
          <Text style={{ fontWeight: 600, fontSize: 24 }}>{title}</Text>
        ) : (
          <Text>Loading...</Text>
        )}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <ButtonLike size={64} liked={liked} onPress={() => dispatch(likeJoke(id))} />
          <ButtonShare joke={joke.title} />
        </View>
      </View>
    </MainScreenWrapper>
  );
};

export default TodayJokesScreen;
