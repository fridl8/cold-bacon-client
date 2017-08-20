import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles/GameStartStyle';
import ClickableImage from '../components/ClickableImage';
import { StackNagivator } from 'react-navigation';

export default class GameStartFetch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
		}
	}

	componentDidMount() {
		return fetch('http://localhost:3000/games', {
			method: 'POST',
			headers: {
				'Accept': 'applicaton/json',
				'Content-Type': 'application/json',
			}
		})
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				actors: responseJson,
			})
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
			<View style={styles.viewFlex}>
				<View style={styles.startingView}>
					<ClickableImage text={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.actors.starting_actor.image_url}} onPress={() => navigate('GameplayScreen', { game_id: this.state.actors.game_id, traceable_id: this.state.actors.starting_actor.id, traceable_type: 'Actor'} )} />
				</View>
				<View style={styles.endingView}>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.actors.ending_actor.image_url}} style={styles.image} resizeMode='contain' />
				</View>
			</View>
		);
	}
}
