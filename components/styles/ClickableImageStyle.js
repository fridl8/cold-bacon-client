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
    // width: 180,
    width: 120,
    height:180,
    backgroundColor:'white',
    // borderRadius: 90,
    borderRadius: 54,
    // resizeMode: 'cover',
    resizeMode: 'contain'
  },
  pathTouchable: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  pathImage: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 90,
    height: 90,
    backgroundColor:'black',
    borderRadius: 45,
    // resizeMode: 'contain',
    resizeMode: 'cover'
  }
});
