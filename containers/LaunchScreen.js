import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/LaunchScreenStyle';
import StartButton from '../components/StartButton';
import GameStart from './GameStart';

export default class LaunchScreen extends Component {
	render() {
		const { navigate } = this.props.navigation;
		return (
		<View style={styles.container} >
      <Image source={require('../assets/images/cold-kevin.jpg')} style={styles.kevin} >
      <View>
        <Text style={styles.header}>Cold Bacon</Text>
      </View>
      <View>
        <StartButton text='Start' onPress={() => navigate('GameStart')} />
      </View>
      </Image>
    </View>
		);
	}
}
