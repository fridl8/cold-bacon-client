import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './styles/ClickablePathStyle';
import PropTypes from 'prop-types';
import { StackNagivator } from 'react-navigation';

export default class ClickablePath extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.object,
    children: PropTypes.object,
    navigation: PropTypes.object
  }

  render() {
    return (
      <View>
      <TouchableOpacity style={styles.touchableSize} activeOpacity={.85} onPress={this.props.onPress}>
          <Image style={styles.image} source={this.props.text} resizeMode='contain' />
      </TouchableOpacity>
      </View>
    )
  }
}