import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles/ActorImageStyle';
import PropTypes from 'prop-types';
import { StackNagivator } from 'react-navigation';

export default class ActorImage extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.object,
    children: PropTypes.string,
    navigation: PropTypes.object
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={this.props.text} style={{width:40, height:40}}/>
      </TouchableOpacity>
    )
  }
}
