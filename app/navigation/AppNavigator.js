import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedNavigator from './FeedNavigator';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import routes from './routes';
import { Home, ProfileScreen } from '../screens';
import RecoveryScreen from '../screens/RecoveryScreen';
import TabBarCustomButton from './TabBarCustomButton';
import { Image } from 'react-native';
import { COLORS, icons } from '../constants';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Feed'
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.cutlery}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.primary : COLORS.lightGray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name='Search'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.search}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.primary : COLORS.lightGray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
      {/* <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.like}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.primary : COLORS.lightGray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      /> */}
      <Tab.Screen
        name='Account'
        component={RecoveryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.user2}
              resizeMode='contain'
              style={{
                width: 20,
                height: 20,
                tintColor: focused ? COLORS.primary : COLORS.lightGray,
              }}
            />
          ),
          tabBarButton: (props) => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
/*
<Tab.Screen
        name='ListingEdit'
        component={ListingEditScreen}
        options={({ navigation , route }) => ({
          tabBarButton: () => (
            <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />
          ),
        })}
/>

*/
