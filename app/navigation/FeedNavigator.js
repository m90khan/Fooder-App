import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Restaurant, Welcome } from '../screens';

const Stack = createStackNavigator();

const FeedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Restaurant' component={Restaurant} />
    </Stack.Navigator>
  );
};

export default FeedNavigator;
