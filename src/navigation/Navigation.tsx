import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodayJokesScreen from '../screens/TodayJokes';
import JokesHistoryScreen from '../screens/JokesHistory';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Today" component={TodayJokesScreen} />
        <Tab.Screen name="History" component={JokesHistoryScreen} />
      </Tab.Navigator>
  );
};

export default RootNavigation;

