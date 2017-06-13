/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import FlatListTest from './src/FlatListTest';
import FlatListCard from './src/FlatListCard';

AppRegistry.registerComponent('SampleCard', () => FlatListCard);