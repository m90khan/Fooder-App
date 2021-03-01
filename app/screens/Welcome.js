import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Screen from '../components/Screen';
import Button from '../components/Button';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={images.welcomeImage}
        resizeMode='cover'
        style={{
          width: '100%',
          height: 500,
        }}
      />
      <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ ...FONTS.h1, color: COLORS.darkGray, fontWeight: 'bold' }}>
          Good Fresh Food
        </Text>
        <Text
          style={{
            ...FONTS.body3,
            color: COLORS.darkGray,
            width: '50%',
            padding: SIZES.padding,
            textAlign: 'center',
          }}
        >
          Order fresh and quality food in minutes
        </Text>
      </View>
      <View
        style={{
          bottom: 20,
          position: 'absolute',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button title='Get Started' onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});

export default Welcome;
