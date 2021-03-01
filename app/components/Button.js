import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { SIZES, COLORS, FONTS } from '../constants';
const Button = ({ onPress, title, icon, color }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: COLORS[color] }]}
      onPress={onPress}
    >
      {icon && <MaterialCommunityIcons name={icon} size={22} color='white' />}
      <Text style={{ color: COLORS.white, ...FONTS.h3, fontWeight: 'bold' }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.9,
    padding: SIZES.padding2 * 1.2,
    borderRadius: SIZES.radius,
    marginBottom: 10,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
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
