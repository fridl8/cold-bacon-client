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

  componentWillMount() {
    console.log('ljsdflkjsdf============================')
  }

  componentDidMount() {
    return fetch('http://localhost:3000/games/'+this.props.navigation.state.params.game_id+'/paths', {
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
        pathInfo: responseJson,
      })
      console.log(this.state.pathInfo);
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
    let thingObject = this.state.pathInfo;
    return (
      <View>
        <View>
          <Image source={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.pathInfo.current_traceable.traceable.image_url}} style={{width:40, height:40}} />
        </View>
        <View>
          {
            this.state.pathInfo.possible_paths.map(function(possible_path, index) {
              return (
                <ClickableImage key={index} text={{uri: 'https://image.tmdb.org/t/p/w185/'+possible_path.traceable.image_url}} onPress={() => navigate('GameplayScreen', { game_id: thingObject.game_id, traceable_id: possible_path.traceable.id, traceable_type: possible_path.traceable_type} )} />
              )
            })
          }
        </View>
        <Text>{ thingObject.game_id }</Text>
      </View>
    )
  }
}
