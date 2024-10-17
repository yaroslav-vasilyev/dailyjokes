import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';

const JokesHistoryScreen = () => {
  const jokesHistory = useSelector((state: AppState) => state.jokes.jokesHistory);

  return (
    <View>
      <Text>Jokes History</Text>
      {!!jokesHistory.length ? jokesHistory.map(joke => (
        <Text key={joke.id}>{joke.title}</Text>
      )) : (
        <Text>No jokes found.</Text>
      )}
    </View>
  );
};

export default JokesHistoryScreen;
