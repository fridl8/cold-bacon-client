import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	header: {
		color: 'darkblue',
		fontSize: 45,
		textAlign: 'center',
		marginTop: Dimensions.get('window').height / 13,
		textShadowColor: 'midnightblue',
		textShadowOffset: {width: 15, height: 20},
		textShadowRadius: 10
	}
});
