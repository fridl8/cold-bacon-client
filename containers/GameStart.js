import React, { Component } from 'react';
import { Text, View, Image, Animated } from 'react-native';
import styles from './styles/GameStartStyle';
import ClickableImage from '../components/ClickableImage';
import { StackNagivator } from 'react-navigation';
import FadeInView from '../animations/FadeInView';

export default class GameStart extends Component {
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
				<View>
					<Text style={styles.start_name} >{this.state.actors.starting_actor.name}</Text>
				</View>
				<FadeInView>
					<View style={styles.startingView}>
						<ClickableImage text={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.actors.starting_actor.image_url}} onPress={() => navigate('GameplayScreen', { game_id: this.state.actors.game_id, traceable_id: this.state.actors.starting_actor.id, traceable_type: 'Actor'} )} />
					</View>
				</FadeInView>
				<FadeInView>
					<View style={styles.endingView}>
						<Image source={{uri: 'https://image.tmdb.org/t/p/w185/'+this.state.actors.ending_actor.image_url}} style={styles.image} resizeMode='contain'/>
					</View>
				</FadeInView>
					<View>
						<Text style={styles.end_name} >{this.state.actors.ending_actor.name}</Text>
					</View>
			</View>
		);
	}
}
