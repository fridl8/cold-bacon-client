import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles/ResultsScreenStyle';
import { StackNagivator } from 'react-navigation';
import RestartButton from '../components/RestartButton';
import LaunchScreen from './LaunchScreen';

export default class ResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/games/'+this.props.navigation.state.params.game_id+'/paths.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        pathsObject: responseJson,
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    const { navigate } = this.props.navigation;
      return (
        <View style={styles.endingPaths}>
          <View>
            {
              this.state.pathsObject.paths_chosen.map(function(path, index) {
                return (
                  <Text key={index}>{path.name}</Text>
                )
              })
            }
          </View>
          <View>
            <RestartButton text='Restart' onPress={() => navigate('LaunchScreen')} />
          </View>
        </View>
      )
  }
}
