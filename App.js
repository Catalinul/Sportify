/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed'; //date hardcodate pt postari

const post1 = feed[0];
const post2 = feed[1];

const App: () => Node = () => {


  return (
    <SafeAreaView>
      {/*<HomeScreen></HomeScreen>*/}
      <Post post={post1} />
      <Post post={post2} />

    </SafeAreaView>
  );
};

export default App;
