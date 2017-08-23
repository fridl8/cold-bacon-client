import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  startTouchable: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startImage: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 120,
    height:180,
    backgroundColor:'white',
    borderRadius: 54,
    resizeMode: 'contain'
  },
  // pathTouchable: {
  //   width: 90,
  //   height: 90,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // borderWidth: 1,
  // },
  pathImage: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 90,
    height: 90,
    backgroundColor:'black',
    borderRadius: 45,
    resizeMode: 'cover'
  },
  finalPathImage: {
    borderWidth:1,
    borderColor:'#00ff00',
    alignItems:'center',
    justifyContent:'center',
    width: 90,
    height: 90,
    backgroundColor:'black',
    borderRadius: 45,
    resizeMode: 'cover'
  },
  movieImage: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 97.2,
    height:145.8,
    backgroundColor:'white',
    borderRadius: 15,
    resizeMode: 'contain'
  },
  moviePath: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 72,
    height:108,
    backgroundColor:'white',
    borderRadius: 10,
    resizeMode: 'contain'
  },
});
