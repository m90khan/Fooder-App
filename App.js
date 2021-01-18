import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { back } from './app/constants/icons';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Restaurant, OrderDelivery, Home } from './app/screens';
import Tabs from './app/navigation/tabs';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
        <Stack.Screen name='Home' component={Tabs} />
        <Stack.Screen name='Restaurant' component={Restaurant} />
        <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
