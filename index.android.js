import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GameStart from './containers/GameStart';
import LaunchScreen from './containers/LaunchScreen';
import ActorsMovies from './containers/ActorsMovies';

const Nav = StackNavigator({
  LaunchScreen: {screen: LaunchScreen },
  GameStart: {screen: GameStart },
  ActorsMovies: {screen: ActorsMovies},
  }, {
    headerMode: 'none'
  }
);

AppRegistry.registerComponent('client', () => Nav);
