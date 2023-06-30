import {StyleSheet} from 'react-native';
import {height, width} from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: height(5),
    paddingHorizontal: width(4),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {width: width(13), height: height(13)},
  textContainer: {marginLeft: width(2), marginTop: height(3)},
  line: {
    height: 1,
    backgroundColor: '#fff',
    width: width(90),
    opacity: 0.1,
    marginTop: height(10),
    position: 'absolute',
  },
});

export const checkboxStyles = (checked: boolean) =>
  StyleSheet.create({
    checkBox: {
      width: 25,
      height: 25,
      borderWidth: 1,
      borderColor: checked ? '#0991cf' : '#fff',
      borderRadius: 15,
      opacity: 0.7,
      backgroundColor: checked ? '#0991cf' : 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
