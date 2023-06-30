import React, {useEffect, useMemo} from 'react';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {useAppDispatch} from 'redux/store';
import {useLoadingSelector} from 'redux/selectors';
import Loader from '../components/organisms/Loader';
import Contacts, {selectContacts} from 'redux/contacts';
import {PermissionsAndroid, Platform} from 'react-native';

const NavigationHandler = () => {
  const dispatch = useAppDispatch();

  const isLoading = useLoadingSelector(Contacts.thunks.doGetContacts);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      })
        .then(res => {
          dispatch(Contacts.thunks.doGetContacts());
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      dispatch(Contacts.thunks.doGetContacts());
    }
  }, []);

  const renderSwitch = useMemo(() => {
    if (isLoading) return <Loader />;
    if (true /** currentuser */) {
      return <AppStack />;
    } else return <AuthStack />;
  }, [isLoading]);

  return (
    <SafeAreaProvider>
      <NavigationContainer>{renderSwitch}</NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationHandler;
