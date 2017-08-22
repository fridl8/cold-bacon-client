import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
	generalButton: {
		height: 60,
		borderRadius: 5,
		marginHorizontal: 20,
		backgroundColor: 'black',
		justifyContent: 'center',
	},
	generalButtonText: {
		color: 'white',
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 20
	},
	startButton: {
		height: 60,
		borderRadius: 5,
		marginHorizontal: 20,
		backgroundColor: 'black',
		justifyContent: 'center',
		top: Dimensions.get('window').height / 4
	}
});
