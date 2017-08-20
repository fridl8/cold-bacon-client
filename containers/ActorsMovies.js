import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles/ActorsMoviesStyle';
import ActorImage from '../components/ActorImage';
import { StackNagivator } from 'react-navigation';

export default class ActorsMovies extends Component {
  render() {
    return (
      <Text>{this.props.data}</Text>
    )
  }
}
