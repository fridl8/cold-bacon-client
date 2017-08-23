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
    marginTop: 5,
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
    borderWidth:2,
    borderColor:'#00ff00',
    alignItems:'center',
    justifyContent:'center',
    width: 90,
    height: 90,
    backgroundColor:'black',
    borderRadius: 45,
    resizeMode: 'cover'
  },
  moviePath: {
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 83.16,
    height: 124.74,
    backgroundColor:'white',
    borderRadius: 11.55,
    resizeMode: 'contain'
  },
});
