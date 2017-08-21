import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  startingView: {
    marginTop: Dimensions.get('window').height / 14
  },
  endingView: {
    marginTop: Dimensions.get('window').height / 2
  },
  viewFlex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 150,
    width: 150
  }
})
