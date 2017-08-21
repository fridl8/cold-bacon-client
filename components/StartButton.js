import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Animated } from 'react-native';
import styles from './styles/StartButtonStyle';
import FadeInView from '../animations/FadeInView';

export default class StartButton extends Component {
	static propTypes = {
		onPress: PropTypes.func,
		text: PropTypes.string,
		children: PropTypes.string,
		navigation: PropTypes.object
	}

	getText () {
		const buttonText = this.props.text || this.props.children || ''
		return buttonText.toUpperCase()
	}

	render () {
		return (
			<FadeInView>
				<TouchableOpacity style={styles.button} onPress={this.props.onPress}>
					<Text style={styles.buttonText}>{this.getText()}</Text>
				</TouchableOpacity>
			</FadeInView>
		)
	}
}
