import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles/GameStartStyle';

class GameStartDisplay extends Component {
	render() {
		return (
			<View>
				<Text>{this.actor.name}</Text>
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
		// return fetch('http://localhost:3000/games/create', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Accept': 'applicaton/json',
		// 		'Content-Type': 'application/json',
		// 	}
		// })
		// .then((response) => response.json())
		// .then((responseJson) => {
		// 	this.setState({
		// 		isLoading: false,
		// 		actor: responseJson,
		// 	})
		// })
		return fetch('http://localhost:3000/actors/1.json')
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				actor:responseJson,
			});
		})
		.catch((error) => {
			console.log(error);
		});
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
				<GameStartDisplay actor={this.state.actor}/>
			</View>
		);
	}
}
// <Text>{this.ending_actor.name}</Text>
