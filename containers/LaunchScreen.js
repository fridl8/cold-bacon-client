import React, { Component } from 'react';
import { Text, View, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import styles from './styles/LaunchScreenStyle';
import StartButton from '../components/StartButton';
import GameStart from './GameStart';
import * as Animatable from 'react-native-animatable';

export default class LaunchScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
		return (
		<View style={styles.container} >
      <Image source={require('../assets/images/cold-kevin.jpg')} style={styles.kevin} >
        <View>
          <Animatable.Text animation="bounceInLeft" style={styles.header}>Cold Bacon</Animatable.Text>
        </View>
        <View>
          <StartButton text='Start' onPress={() => navigate('GameStart')} />
        </View>
      </Image>
    </View>
		);
	}
}

//  <View>
//   <Image source={require('../assets/cold-kevin.jpg')} style={styles.kevin} >
//     <View>
//       <Text style={styles.header}>Cold Bacon</Text>
//     </View>
//     <View>
//       <StartButton text='Start' onPress={() => navigate('GameStart')} />
//     </View>
//   </Image>
// </View>
// lightSpeedIn
