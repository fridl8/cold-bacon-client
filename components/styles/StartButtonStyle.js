import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	button: {
		height: 60,
		borderRadius: 5,
		marginHorizontal: 20,
		backgroundColor: 'black',
		justifyContent: 'center',
		top: Dimensions.get('window').height / 4
	},
	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20
	}
});
