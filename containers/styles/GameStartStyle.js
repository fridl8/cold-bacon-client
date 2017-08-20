import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  startingView: {
    marginTop: Dimensions.get('window').height / 14
  },
  startingText: {
    textAlign: 'center'
  },
  endingView: {
    marginTop: Dimensions.get('window').height / 1.6
  },
  endingText: {
    textAlign: 'center'
  }
})
