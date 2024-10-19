import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ButtonLike from './ButtonLike';
import { Joke } from '../store/sliceTypes';
import { likeJoke } from '../store/jokesSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import ButtonShare from './ButtonShare';

interface Props {
  joke: Joke
}

const JokeItem: React.FC<Props> = ({ joke }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id, title, liked } = joke;

  return (
    <View key={id}>
      <View style={styles.jokeContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>{title}</Text>
          <ButtonLike size={48} liked={liked} onPress={() => dispatch(likeJoke(id))} />
        </View>
        <ButtonShare size={20} joke={joke.title} />
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  jokeContainer: {
    paddingVertical: 24,
    gap: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: '500',
    flex: 1,
    fontSize: 16,
    marginRight: 20,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: '#E6E6E6',
  },
});

export default JokeItem;
