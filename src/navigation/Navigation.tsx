import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodayJokesScreen from '../screens/TodayJokes';
import JokesHistoryScreen from '../screens/JokesHistory';
import TodayTab from '../assets/todayTab';
import HistoryTab from '../assets/historyTab';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarLabelStyle: { fontSize: 12, fontWeight: '600' },
      tabBarActiveTintColor: '#9763FF',
      tabBarInactiveTintColor: '#C1C3C6',
      tabBarStyle: {
        marginHorizontal: 100,
        marginVertical: 10,
        borderTopColor: 'transparent',
      },
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => (
          <TodayTab color={focused ? '#9763FF' : '#C1C3C6'} />
        ),
      }}
      name="Today"
      component={TodayJokesScreen}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ focused }) => (
          <HistoryTab color={focused ? '#9763FF' : '#C1C3C6'} />
        ),
      }}
      name="History"
      component={JokesHistoryScreen}
    />
  </Tab.Navigator>
  );
};

export default RootNavigation;

