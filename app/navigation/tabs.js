import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { COLORS, icons } from '../constants';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Welcome } from '../screens';
import TabBarCustomButton from './TabBarCustomButton';
import { isIphoneX } from 'react-native-iphone-x-helper';

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
  if (isIphoneX()) {
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 30,
            backgroundColor: COLORS.white,
          }}
        ></View>
        <BottomTabBar {...props.props} />
      </View>
    );
  } else {
    return <BottomTabBar {...props.props} />;
  }
};

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          borderTopWidth: 1,
          elevation: 0,
          backgroundColor: 'transparent',
        },
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name='Home'
        component={Home}
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
        component={Welcome}
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
      <Tab.Screen
        name='Like'
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
      />
      <Tab.Screen
        name='User'
        component={Home}
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

export default Tabs;
