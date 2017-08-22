import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    // flex: 3,
    width: Dimensions.get('window').width * .97,
    height: Dimensions.get('window').height * .95,
    marginLeft: Dimensions.get('window').width / 60,
    marginTop: Dimensions.get('window').width / 20,
  },
  actor_image: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 140,
    height: 140,
    backgroundColor:'white',
    borderRadius: 70,
    resizeMode: 'cover'
  },
  startingActorView: {
    flex: 1.2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  endingActorView: {
    flex: 1.2,
    flexDirection: 'column',
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
    padding: 35,
    // alignItems: 'flex-start',
  },
  endingPaths: {
    marginTop: Dimensions.get('window').height / 2,
  }
})
