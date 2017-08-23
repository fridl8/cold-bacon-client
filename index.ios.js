import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GameStart from './containers/GameStart';
import LaunchScreen from './containers/LaunchScreen';
import GameplayScreen from './containers/GameplayScreen';
import ResultsScreen from './containers/ResultsScreen';

const Nav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  GameStart: {
    path: ':create_game_path',
    screen: GameStart },
  GameplayScreen: {
    path: 'games/:game_id/:traceable_id/:traceable_type',
    screen: GameplayScreen },
  ResultsScreen: {
    path: 'games/:game_id',
    screen: ResultsScreen },
  }, {
    headerMode: 'none'
  }
);

AppRegistry.registerComponent('client', () => Nav);
