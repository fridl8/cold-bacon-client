import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/GameStartStyle';

class GameStartDisplay extends Component {
	render() {
		return (
			<View>
				<View style={styles.startingView}>
					<Text style={styles.startingText}>{this.props.actors.starting_actor.name}</Text>
				</View>
				<View style={styles.endingView}>
					<Text style={styles.endingText}>{this.props.actors.ending_actor.name}</Text>
				</View>
			</View>
		);
	}
}

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

		return (
			<View>
				<GameStartDisplay actors={this.state.actors}/>
			</View>
		);
	}
}
// <Text>{this.ending_actor.name}</Text>
