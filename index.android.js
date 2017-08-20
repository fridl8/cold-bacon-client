import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import GameStart from './containers/GameStart';
import LaunchScreen from './containers/LaunchScreen';

const Nav = StackNavigator({
	LaunchScreen: {screen: LaunchScreen },
  GameStart: {screen: GameStart }
});

AppRegistry.registerComponent('client', () => Nav);
