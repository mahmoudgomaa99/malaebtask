import {
  ActivityIndicator,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {BorderRadius, MarginsAndPaddings} from 'values/Dimensions';
import COLORS from 'values/colors';
import Fonts from 'values/fonts';

type TType =
  | 'primary'
  | 'secondry'
  | 'ticket_type'
  | 'warning'
  | 'black'
  | 'beta';

type TButton = {
  isLoading?: boolean;
  type: TType;
  label?: string;
};

const Button = ({
  isLoading,
  type,
  label,
  ...props
}: TouchableOpacityProps & TButton) => {
  return (
    <TouchableOpacity {...props}>
      <View
        style={
          {
            ...styles[type],
            backgroundColor: props.disabled
              ? '#D1D1D1'
              : styles[type]?.backgroundColor,
          } || {...styles.primary}
        }>
        {isLoading ? (
          <ActivityIndicator color={COLORS.secondery} />
        ) : !props.children ? (
          <Text
            style={
              {
                ...styles[`txt_${type}`],
                color: props.disabled
                  ? '#A1A1A1'
                  : styles[`txt_${type}`]?.color,
              } || styles?.txt_primary
            }>
            {label}
          </Text>
        ) : (
          props.children
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  primary: {
    padding: MarginsAndPaddings.xxl,
    backgroundColor: COLORS.secondery,
    paddingHorizontal: MarginsAndPaddings.xxl,
    margin: MarginsAndPaddings.m,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.s,
    marginHorizontal: MarginsAndPaddings.xxl,
    marginTop: Dimensions.get('window').height * 0.02,
  },
  beta: {
    padding: MarginsAndPaddings.xxl,
    backgroundColor: COLORS.secButtonBG,
    paddingHorizontal: MarginsAndPaddings.xxl,
    margin: MarginsAndPaddings.m,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BorderRadius.s,
    marginHorizontal: MarginsAndPaddings.xxl,
    marginTop: 25,
  },
  txt_beta: {
    color: COLORS.secondery,
    fontFamily: Fonts.RobotoRegular,
    fontSize: 16,
    fontWeight: '800',
  },
  secondry: {
    backgroundColor: COLORS.secButtonBG,
    paddingHorizontal: MarginsAndPaddings.ml + 15,
    padding: MarginsAndPaddings.xxl,
    marginHorizontal: MarginsAndPaddings.xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 10,
  },
  ticket_type: {
    backgroundColor: '#F8F8F8',
    padding: MarginsAndPaddings.ml - 3,
    borderRadius: 15,
    margin: MarginsAndPaddings.xxl,
    marginTop: MarginsAndPaddings.ml,
  },
  txt_primary: {
    color: COLORS.white,
    fontFamily: Fonts.RobotoRegular,
    fontSize:
      Platform.OS === 'ios'
        ? Dimensions.get('window').width * 0.039
        : Dimensions.get('window').width * 0.035,
  },
  txt_secondry: {
    color: COLORS.secondery,
    fontWeight: '700',
  },
  txt_ticket_type: {color: COLORS.primary, fontWeight: '700', fontSize: 17},
  warning: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: '100%',
    backgroundColor: COLORS.warning,
    paddingHorizontal: 10,
    borderRadius: BorderRadius.s,
  },
  txt_warning: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '500',
  },
  black: {
    backgroundColor: COLORS.black,
    paddingHorizontal: MarginsAndPaddings.ml + 15,
    padding: MarginsAndPaddings.xxl,
    marginHorizontal: MarginsAndPaddings.xl,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
    flexDirection: 'row',
    marginTop: Dimensions.get('window').height * 0.02,
    borderColor: COLORS.secondery,
    borderWidth: 2,
  },
  txt_black: {
    color: COLORS.white,
  },
});
