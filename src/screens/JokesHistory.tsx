import React from 'react';
import {FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';
import JokeItem from '../components/JokeItem';
import {AppState} from '../store/store';
import MainScreenWrapper from './MainScreenWrapper';

const JokesHistoryScreen = () => {
  const jokesHistory = useSelector(
    (state: AppState) => state.jokes.jokesHistory,
  );

  return (
    <MainScreenWrapper title="History">
      {!!jokesHistory.length ? (
        <FlatList
          data={jokesHistory}
          keyExtractor={joke => joke.id}
          renderItem={({item}) => <JokeItem joke={item} />}
        />
      ) : (
        <Text>No jokes found.</Text>
      )}
    </MainScreenWrapper>
  );
};

export default JokesHistoryScreen;
