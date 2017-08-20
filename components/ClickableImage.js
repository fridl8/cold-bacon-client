import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles/ClickableImageStyle';
import PropTypes from 'prop-types';
import { StackNagivator } from 'react-navigation';

export default class ClickableImage extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.object,
    children: PropTypes.object,
    navigation: PropTypes.object
  }

  render() {
    return (
      <TouchableOpacity style={styles.touchableSize} activeOpacity={.85} onPress={this.props.onPress}>
          <Image style={{height:90, width:90}} source={this.props.text} resizeMode='contain' />
      </TouchableOpacity>
    )
  }
}
