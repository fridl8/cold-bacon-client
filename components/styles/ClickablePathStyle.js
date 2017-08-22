import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  touchableSize: {
    width: 90,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 1,
  },
  image: {
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
