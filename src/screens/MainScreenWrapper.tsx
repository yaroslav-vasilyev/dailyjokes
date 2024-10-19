import React from "react";
import { Text, View } from "react-native";

interface Props {
  title: string;
  children: React.ReactNode;
}

const TodayJokesScreen: React.FC<Props> = ({ title, children }) => {
  return (
    <View style={{ paddingHorizontal: 24, flex: 1 }}>
      <Text style={{ fontSize: 36, fontWeight: 700, marginTop: 64, marginBottom: 24 }}>{title}</Text>
      <View style={{ height: 1, marginHorizontal: -24, backgroundColor: '#E6E6E6' }} />
      {children}
    </View>
  );
};

export default TodayJokesScreen;
