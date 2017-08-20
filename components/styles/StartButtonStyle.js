import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	button: {
		height: 45,
		borderRadius: 5,
		marginHorizontal: 5,
		backgroundColor: 'black',
		justifyContent: 'center',
		top: Dimensions.get('window').height / 1.6
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 15
	}
});
