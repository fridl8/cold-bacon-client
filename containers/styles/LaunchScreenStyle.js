import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	header: {
		color: 'black',
		fontSize: 45,
		textAlign: 'center',
		marginTop: Dimensions.get('window').height / 13,
    fontFamily: 'Bodoni 72 Smallcaps',
	}
});
