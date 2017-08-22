import React, { Component } from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import styles from './styles/ClickableImageStyle';
import PropTypes from 'prop-types';
import { StackNagivator } from 'react-navigation';
import FadeInView from '../animations/FadeInView';

export default class ClickableImage extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.object,
    children: PropTypes.object,
    navigation: PropTypes.object
  }

  render() {
    return (
      <View>
        <FadeInView>
          <TouchableOpacity style={styles.touchableSize} activeOpacity={.85} onPress={this.props.onPress}>
              <Image style={styles.image} source={this.props.text} />
          </TouchableOpacity>
        </FadeInView>
      </View>
    )
  }
}