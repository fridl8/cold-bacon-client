import React, { Component } from 'react';
import { TouchableWithoutFeedback, Image, View } from 'react-native';
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

  render() {
    return (
      <View>
        <FadeInView>
          <TouchableWithoutFeedback onLongPress={this.props.onLongPress}>
              <Image style={this.props.imageStyle} source={this.props.imageSource} />
          </TouchableWithoutFeedback>
        </FadeInView>
      </View>
    )
  }
}
