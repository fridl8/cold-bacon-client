import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles/GameStartStyle';
import ActorImage from '../components/ActorImage';
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
			<View>
				<View>
					<ActorImage text={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.actors.starting_actor.image_url}} onPress={() => navigate('StartingActorsMovies', { id: this.state.actors.starting_actor.id} )} />
				</View>
				<View>
					<Image source={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.actors.ending_actor.image_url}} style={{width:40, height:40}} />
				</View>
			</View>
		);
	}
}
// <Text>{this.ending_actor.name}</Text>
