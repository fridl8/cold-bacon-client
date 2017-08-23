import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  resultText: {
    fontFamily: 'Cabin Sketch',
    textAlign: 'center',
    fontSize: 25,
  },
  startingImage: {
    marginTop: 20,
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  endingImage: {

  },
  endingPaths: {
    marginTop: 10,
  },
  buttonView: {
    // flex: 1,
    // justifyContent: 'center',
  }
});