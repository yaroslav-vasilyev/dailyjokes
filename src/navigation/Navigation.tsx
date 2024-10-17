import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TodayJokesScreen from '../screens/TodayJokes';
import JokesHistoryScreen from '../screens/JokesHistory';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Today" component={TodayJokesScreen} />
        <Tab.Screen name="History" component={JokesHistoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

