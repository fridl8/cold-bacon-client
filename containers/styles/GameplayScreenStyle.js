import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    // flex: 3,
    width: Dimensions.get('window').width * .97,
    height: Dimensions.get('window').height * .95,
    marginLeft: Dimensions.get('window').width / 60,
    marginTop: Dimensions.get('window').width / 20,
  },
  image: {
    height: 80,
    width: 80,
    resizeMode: 'contain'
  },
  actorView: {
    flex: .6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  endingActorView: {
    flex: .6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  pathsView: {
    flex: 3,
    // borderWidth: 1,
    left: 0,
  },
  path: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  endingPaths: {
    marginTop: Dimensions.get('window').height / 14
  }
})
