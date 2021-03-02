import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../constants';

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: COLORS.light,
  },
});

export default ListItemSeparator;
