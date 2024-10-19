import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchJoke} from '../api/fetchJoke';
import ButtonLike from '../components/ButtonLike';
import ButtonShare from '../components/ButtonShare';
import isNewDay from '../helpers/isNewDay';
import {likeJoke, setLastFetchData} from '../store/jokesSlice';
import {AppDispatch, AppState} from '../store/store';
import MainScreenWrapper from './MainScreenWrapper';

const TodayJokesScreen = () => {
  const dispatch = useDispatch<AppDispatch>();

  const jokesHistory = useSelector(
    (state: AppState) => state.jokes.jokesHistory,
  );
  const lastFetchData = useSelector(
    (state: AppState) => state.jokes.lastFetchData,
  );
  const joke = jokesHistory[0];
  const {title, id, liked} = joke;

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
      <View style={styles.container}>
        {joke ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          <Text>Loading...</Text>
        )}
        <View style={styles.actionsContainer}>
          <ButtonLike
            size={64}
            liked={liked}
            onPress={() => dispatch(likeJoke(id))}
          />
          <ButtonShare joke={joke.title} />
        </View>
      </View>
    </MainScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    gap: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TodayJokesScreen;
