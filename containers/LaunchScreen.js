import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/LaunchScreenStyle';
import StartButton from '../components/StartButton';
import GameStart from './GameStart';

export default class LaunchScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
		  <View>
			<Text style={styles.header}>Cold Bacon</Text>
			<StartButton text='Start' onPress={() => navigate('GameStart')} />
			</View>
		);
	}
}
