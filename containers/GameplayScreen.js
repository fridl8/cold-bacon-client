import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles/GameplayScreenStyle';
import ActorImage from '../components/ActorImage';
import { StackNagivator } from 'react-navigation';

export default class StartingActorsMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  componentDidMount() {
    return fetch('http://localhost:3000/games/'+this.props.navigation.state.params.game_id+'/paths', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        game_id: this.props.navigation.state.params.game_id,
        traceable_id: this.props.navigation.state.params.traceable_id,
        traceable_type: this.props.navigation.state.params.traceable_type,
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        pathinfo: responseJson,
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    )
  }
}
