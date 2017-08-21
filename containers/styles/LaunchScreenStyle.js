import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	header: {
		color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0)',
		fontSize: 45,
		textAlign: 'center',
		marginTop: Dimensions.get('window').height / 2.3,
    fontFamily: 'Bodoni 72 Smallcaps',
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
