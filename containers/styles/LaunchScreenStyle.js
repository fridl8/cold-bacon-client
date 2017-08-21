import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	header: {
		color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)',
		fontSize: 55,
		textAlign: 'center',
		marginTop: Dimensions.get('window').height / 2.3,
    fontFamily: 'Faster One',
    fontWeight: '900',
	},
  kevin: {
    marginTop: 20,
    resizeMode: 'cover',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  // container: {
  //   flex:1,
  //   height: undefined,
  //   width: undefined,
  // }
});
