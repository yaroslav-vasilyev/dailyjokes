import { Pressable, StyleSheet } from 'react-native';
import React from 'react';
import LikeFilled from '../assets/likeFilled';
import LikeUnfilled from '../assets/likeUnfilled';

interface Props {
  liked: boolean;
  onPress: () => void;
  size: number;
}

const ButtonLike: React.FC<Props> = ({ liked, onPress, size }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          width: size,
          height: size,
        },
        styles.button,
        liked ? styles.liked : styles.unliked,
      ]}
    >
      {liked ? <LikeFilled /> : <LikeUnfilled />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  liked: {
    backgroundColor: '#9763FF',
  },
  unliked: {
    backgroundColor: 'rgba(151, 99, 255, 0.2)',
  },
});

export default ButtonLike;
