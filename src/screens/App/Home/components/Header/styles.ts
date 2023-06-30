import {StyleSheet} from 'react-native';
import {height, width} from 'values/Dimensions';
import COLORS from 'values/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.darkGrey,
    paddingTop: 40,
    paddingHorizontal: 15,
    width: width(100),
    paddingBottom: 10,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cancelText: {
    color: COLORS.blue,
    fontSize: 16,
    fontWeight: '500',
  },
  nextText: {
    color: COLORS.openGrey,
    fontSize: 16,
    fontWeight: '500',
  },
  addParticipantContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addParticipantText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
  counterText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '400',
    opacity: 0.9,
    marginTop: 2,
  },
  textInput: {
    height: height(11),
    backgroundColor: COLORS.openGrey,
    borderRadius: 10,
    marginVertical: height(3),
    paddingLeft: width(8),
    color: '#fff',
  },
  searchIcon: {position: 'absolute', top: '33%', marginLeft: width(1)},
});
