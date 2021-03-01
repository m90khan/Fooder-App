import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { SIZES, COLORS } from '../constants';
const Icon = ({ onPress, source }) => {
  return (
    <TouchableOpacity
      style={{
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      <Image
        source={source}
        resizeMode='contain'
        style={{
          width: 25,
          height: 25,
        }}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 50,
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
});

export default Icon;
