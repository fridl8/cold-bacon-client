import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, Animated } from 'react-native';
import FadeInView from '../animations/FadeInView';

export default class StartButton extends Component {
	static propTypes = {
		onPress: PropTypes.func,
		text: PropTypes.string,
		children: PropTypes.string,
		navigation: PropTypes.object,
		textStyle: Text.propTypes.style,
    touchStyle: Text.propTypes.style
	}

	getText() {
		const buttonText = this.props.text || this.props.children || ''
		return buttonText.toUpperCase()
	}

	render() {
		return (
			<FadeInView>
				<TouchableOpacity style={this.props.touchStyle} onPress={this.props.onPress}>
					<Text style={this.props.textStyle}>{this.getText()}</Text>
				</TouchableOpacity>
			</FadeInView>
		)
	}
}
