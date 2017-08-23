import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  result_text: {
    fontFamily: 'Cabin Sketch',
    textAlign: 'center',
    fontSize: 25,
  },
  starting_image: {
    marginTop: 20,
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  ending_image: {

  },
  endingPaths: {
    marginTop: 10,
  },
});