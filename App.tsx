import {StatusBar} from 'react-native';
import React from 'react';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {store} from 'redux/store';
import {Provider} from 'react-redux';
import {toastConfig} from 'src/config/Toast';
import NavigationHandler from 'navigation/index';

const App = () => {
  return (
      <Provider store={store}>
        <NavigationHandler />
        <Toast config={toastConfig} topOffset={70} />
      </Provider>
  );
};

export default App;
