/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Router from './src/navigation/Router';

import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'
Amplify.configure(awsconfig)


const App: () => Node = () => {

  return (
    <>

    <StatusBar barStyle="dark-content" />
    
    <Router/>

    </>
  );
};

export default App;
