import React from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {
  title: string;
  children: React.ReactNode;
}

const MainScreenWrapper: React.FC<Props> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.separator} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    marginTop: 64,
    marginBottom: 24,
  },
  separator: {
    height: 1,
    marginHorizontal: -24,
    backgroundColor: '#E6E6E6',
  },
});

export default MainScreenWrapper;
