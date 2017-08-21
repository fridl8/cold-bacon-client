import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  ActorView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  endingPaths: {
    marginTop: Dimensions.get('window').height / 14
  }
})
