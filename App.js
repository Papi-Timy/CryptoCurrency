/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator  from './src/navigation/AuthNavigation'

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  
  return (
    <NavigationContainer>
      <AuthNavigator/>

    </NavigationContainer>

  
  );
};


export default App;
