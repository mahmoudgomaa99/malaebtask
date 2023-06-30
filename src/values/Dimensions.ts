import {Dimensions} from 'react-native';
export const MarginsAndPaddings = {
  xxs: 2,
  xs: 4,
  s: 6,
  m: 8,
  l: 10,
  xl: 12,
  xxl: 15,
  ml: 25,
};

export const BorderRadius = {
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 25,
};

export const width = (width: number) =>
  Dimensions.get('window').width * width * 0.01;
export const height = (height: number) =>
  Dimensions.get('window').height * height * 0.0046;
