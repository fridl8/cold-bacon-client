import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles/GameplayScreenStyle';
import ClickableImage from '../components/ClickableImage';
import clickableStyles from '../components/styles/ClickableImageStyle';
import { StackNagivator } from 'react-navigation';
import GameStart from './GameStart';
import GeneralButton from '../components/GeneralButton';
import buttonStyles from '../components/styles/ButtonStyle';
import LaunchScreen from './LaunchScreen';
import * as Animatable from 'react-native-animatable';

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
    let responseObject = this.state.pathInfo;
    let traceableType = this.props.navigation.state.params.traceable_type;
    let movieChoices = false;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.startingActorView}>
          <View>
            <Image source={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.pathInfo.current_traceable.traceable.image_url}} style={[styles.actor_image, (!responseObject.is_movie) && clickableStyles.movieImage]} />
          </View>
        </View>
        <View style={styles.pathsView}>
          <View style={styles.path}>
            {
              this.state.pathInfo.possible_paths.map(function(possible_path, index) {
                if ((possible_path.traceable.id === responseObject.ending_traceable.id) && (possible_path.traceable_type === "Actor")) {
                  return (
                    <Animatable.Image animation="pulse" easing="ease-out" duractoin="5000" iterationCount="infinite" style={styles.pulse_image}>
                      <ClickableImage key={index} text={{uri: 'https://image.tmdb.org/t/p/w185/'+possible_path.traceable.image_url}} imageStyle={clickableStyles.finalPathImage} touchStyle={clickableStyles.pathTouchable} onPress={() => navigate('ResultsScreen', { game_id: responseObject.game_id } )} />
                    </Animatable.Image>
                  )
                  }
                else {
                  return (
                    <ClickableImage key={index} text={{uri: 'https://image.tmdb.org/t/p/w185/'+possible_path.traceable.image_url}} imageStyle={[clickableStyles.pathImage, (responseObject.is_movie) && clickableStyles.moviePath]} touchStyle={clickableStyles.pathTouchable} onPress={() => navigate('GameplayScreen', { game_id: responseObject.game_id, traceable_id: possible_path.traceable.id, traceable_type: possible_path.traceable_type} )} />
                  )
                }
              })
            }
          </View>
        </View>
        <View style={styles.endingActorView}>
          <View>
            <Image source={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.pathInfo.ending_traceable.image_url}} style={styles.actor_image} />
          </View>
        </View>
        <View style={styles.buttonView}>
          <Text></Text>
          <GeneralButton text='Give Up' textStyle={buttonStyles.endGameText} touchStyle={buttonStyles.endGameButton} onPress={() => navigate('LaunchScreen')} />
        </View>
      </View>
    )
  }
}
