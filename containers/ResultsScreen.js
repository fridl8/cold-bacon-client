import React, { Component } from 'react';
import { Text, Image, View, FlatList } from 'react-native';
import styles from './styles/ResultsScreenStyle';
import { StackNagivator } from 'react-navigation';
import GeneralButton from '../components/GeneralButton';
import buttonStyles from '../components/styles/ButtonStyle';
import LaunchScreen from './LaunchScreen';

export default class ResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  // componentDidMount() {
  //   return fetch(serverBaseUrl+'/games/'+this.props.navigation.state.params.game_id+'/paths.json')
  //   method: 'post',
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({
  //       isLoading: false,
  //       pathsObject: responseJson,
  //     })
  //     console.log(this.state.pathsObject);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   })
  // }

  componentDidMount() {
    return fetch(serverBaseUrl+'/games/'+this.props.navigation.state.params.game_id+'/paths', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        traceable_type: this.props.navigation.state.params.traceable_type,
        traceable_id: this.props.navigation.state.params.traceable_id,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        pathsObject: responseJson,
      })
      console.log(this.state.pathsObject);
    })
    .catch((error) => {
      console.error(error)
    })
  }

  renderItem({ item }) {
    return (
      <Text style={styles.resultText}>{item.name}</Text>
    );
  }

  renderRestartButton() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.buttonView}>
        <GeneralButton text='Main Menu' textStyle={ buttonStyles.generalButtonText } touchStyle={ buttonStyles.mainMenu } onPress={ () => navigate('LaunchScreen') } />
      </View>
    );
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

      return (
        <View style={styles.endingPaths}>
          <View>
            <FlatList
              key={'PathsTaken'}
              data={ this.state.pathsObject.paths_chosen }
              renderItem={ this.renderItem }
              keyExtractor={ item => item.id+item.name }
              ListHeaderComponent={ this.renderRestartButton.bind(this) }
            />
          </View>
        </View>
      )
  }
}
