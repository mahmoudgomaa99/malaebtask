import {StyleSheet} from 'react-native';
import {height, width} from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {backgroundColor: COLORS.backGround, flex: 1},
  line: {
    height: 1,
    backgroundColor: '#fff',
    width: width(100),
    opacity: 0.1,
  },
});
