import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';

function AppTextInput({ icon, width = '95%', ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={COLORS.darkGray}
          style={styles.icon}
        />
      )}
      <TextInput placeholderTextColor={COLORS.lightGray} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    borderColor: COLORS.lightGray,
    backgroundColor: COLORS.lightGray3,
    borderWidth: 0.3,
    flexDirection: 'row',
    padding: 12,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    marginTop: 3,
  },
});

export default AppTextInput;
