import {Platform, StyleSheet} from 'react-native';
import {height, width} from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    marginVertical: height(4),
    paddingHorizontal: width(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {width: width(15), height: height(15)},
  nameText: {
    color: COLORS.white,
    marginTop: Platform.OS === 'android' ? height(1) : -height(8),
  },
  removeIcon: {
    position: 'absolute',
    top: '0%',
    right: '20%',
  },
});
