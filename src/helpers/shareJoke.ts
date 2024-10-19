import { Share } from "react-native";

const shareJoke = async (joke: string) => {
  try {
    await Share.share({
      message: `${joke}\n\nMake your day better with dailyjokes`,
    });
  } catch (error) {
    console.error('Error sharing joke:', error);
  }
};

export default shareJoke;
