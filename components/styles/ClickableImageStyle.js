import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  touchableSize: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 180,
    height:180,
    backgroundColor:'white',
    borderRadius: 90,
    resizeMode: 'cover'
  }
});
