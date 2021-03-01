import { Dimensions } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
const { width, height } = Dimensions.get('window');
import { Platform } from 'react-native';

export const COLORS = {
  // base colors
  primary: '#1FCC79', // orange
  secondary: '#FF6464', // gray

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',
  darkGray: '#2E3E5C',
  lightGray: '#9FA5C0',
  lightGray2: '#D0DBEA',
  lightGray3: '#F4F5F7',
  lightGray4: '#ededee',
  transparent: 'transparent',
  darkgray: '#898C95',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

const fontOSFamily = Platform.OS === 'android' ? 'Roboto' : 'Avenir';

export const FONTS = {
  largeTitle: {
    fontFamily: 'Roboto-regular',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },

  h1: { fontFamily: fontOSFamily, fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: fontOSFamily, fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: fontOSFamily, fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: fontOSFamily, fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: fontOSFamily, fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: fontOSFamily, fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: fontOSFamily, fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: fontOSFamily, fontSize: SIZES.body4, lineHeight: 22 },
  body5: { fontFamily: fontOSFamily, fontSize: SIZES.body5, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
