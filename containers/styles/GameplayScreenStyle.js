import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    // flex: 3,
    width: Dimensions.get('window').width * .97,
    height: Dimensions.get('window').height * .95,
    marginLeft: Dimensions.get('window').width / 60,
    marginTop: Dimensions.get('window').width / 20,
  },
  startingActorView: {
    flex: 1.6,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  endingActorView: {
    flex: 1.6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  pathsView: {
    flex: 3,
    justifyContent: 'center',
    // borderWidth: 1,
    // left: 0,
  },
  path: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 5,
    // alignItems: 'flex-start',
  },
  buttonView: {
    flex: .11,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loadingView: {
    marginTop: Dimensions.get('window').height / 1.03
  },
  loadingText: {
    fontFamily: 'Faster One'
  }
})
