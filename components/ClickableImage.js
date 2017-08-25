import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
// import styles from './styles/ClickableImageStyle';
import PropTypes from 'prop-types';
import { StackNagivator } from 'react-navigation';
import FadeInView from '../animations/FadeInView';

export default class ClickableImage extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    imageSource: PropTypes.object,
    children: PropTypes.object,
    navigation: PropTypes.object,
    imageStyle: Image.propTypes.style,
    touchStyle: View.propTypes.style
  }

  _onLongPress() {

  }

  render() {
    return (
      <View>
        <FadeInView>
          <TouchableOpacity style={this.props.touchStyle} activeOpacity={.85} onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
              <Image style={this.props.imageStyle} source={this.props.imageSource} />
          </TouchableOpacity>
        </FadeInView>
      </View>
    )
  }
}
