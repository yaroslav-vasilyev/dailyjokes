import { Pressable } from 'react-native'
import React from 'react'
import ShareIcon from '../assets/share';
import shareJoke from '../helpers/shareJoke';

interface Props {
  joke: string;
  size?: number;
}

const ButtonShare: React.FC<Props> = ({ joke, size }) => {
  return (
    <Pressable onPress={() => shareJoke(joke)}>
      <ShareIcon width={size ?? 32} height={size ?? 32} />
    </Pressable>
  );
};

export default ButtonShare;
