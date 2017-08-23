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
    width: 160,
    height: 160,
    backgroundColor:'white',
    borderRadius: 80,
    resizeMode: 'cover'
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
   movieImage: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 108.92,
    height:160.38,
    backgroundColor:'white',
    borderRadius: 16.5,
    resizeMode: 'contain'
  },
})
