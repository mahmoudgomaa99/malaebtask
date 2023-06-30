import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import COLORS from 'values/colors';

export type TAuthStack = {};

const Stack = createNativeStackNavigator<TAuthStack>();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: COLORS.backGround},
      }}>
      <></>
    </Stack.Navigator>
  );
};

export default AuthStack;
