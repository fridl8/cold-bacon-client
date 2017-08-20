import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles/GameplayScreenStyle';
import ClickableImage from '../components/ClickableImage';
import { StackNagivator } from 'react-navigation';

export default class GameplayScreen extends Component {
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
        pathInfo: responseJson,
      })
      console.log(this.state.pathInfo)
    })
    .catch((error) => {
      console.error(error)
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
      <View>
        <View>
          <Image source={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.pathInfo.traceable.image_url}} style={{width:40, height:40}} />
        </View>
        <View>
          {
            this.state.pathInfo.traceables.map(function(traceable, index) {
              return (
                <ClickableImage key={index} text={{uri: 'https://image.tmdb.org/t/p/w185/'+traceable.image_url}} onPress={() => navigate('GameplayScreen', { game_id: this.state.pathInfo.game_id, traceable_id: this.state.pathInfo.current_traceable.traceable.id, traceable_type: this.state.pathInfo.current_traceable.traceable.type} )} />
              )
            })
          }
        </View>
      </View>
    )
  }
}
