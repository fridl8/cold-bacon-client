import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles/ClickableImageStyle';
import PropTypes from 'prop-types';
import { StackNagivator } from 'react-navigation';

export default class ClickableImage extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.object,
    children: PropTypes.string,
    navigation: PropTypes.object
  }

  render() {
    return (
      <TouchableOpacity style={styles.touchable} activeOpacity={.85} onPress={this.props.onPress}>
          <Image source={this.props.text} style={{width:40, height:40}} />
      </TouchableOpacity>
    )
  }
}
