import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/LaunchScreenStyle';
import StartButton from '../components/StartButton';

export default class LaunchScreen extends Component {
	render() {
		return (
		  <View>
			<Text style={styles.header}>Cold Bacon</Text>
			<StartButton text='Start' onPress={() => window.alert('Pressed!')} />
			</View>
		);
	}
}
