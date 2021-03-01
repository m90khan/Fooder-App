import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { SIZES, COLORS, FONTS } from '../constants';
const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{ color: COLORS.white, ...FONTS.h2 }}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    borderRadius: SIZES.radius,
    marginBottom: 10,
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

export default Button;
