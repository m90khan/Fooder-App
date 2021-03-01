import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Restaurant, OrderDelivery, Home, Welcome } from './app/screens';
import Tabs from './app/navigation/tabs';

import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import { navigationRef } from './app/navigation/rootNavigation';
const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{ headerShown: false }}
    //     initialRouteName={'RecoverPassword'}
    //   >
    //     <Stack.Screen name='Welcome' component={Welcome} />

    //     <Stack.Screen name='Home' component={Tabs} />
    //     <Stack.Screen name='Restaurant' component={Restaurant} />
    //     <Stack.Screen name='OrderDelivery' component={OrderDelivery} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <NavigationContainer ref={navigationRef}>
      <Stack.Screen name='Welcome' component={Welcome} />

      {user ? <AppNavigator /> : <AuthNavigator />}
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
