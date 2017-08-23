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
	},
	endGameButton: {
		height: 22,
		width: 85,
		backgroundColor: 'black',
		justifyContent: 'center',
		borderRadius: 5,
		marginRight: 2,
	},
	endGameText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 10,
		fontWeight: 'bold',
	},
	backButton: {
		height: 22,
		width: 85,
		backgroundColor: 'black',
		justifyContent: 'center',
		borderRadius: 5,
	},
	backText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 10,
		fontWeight: 'bold',
	},
	mainMenu: {
		height: 35,
		borderRadius: 5,
		marginHorizontal: 20,
		backgroundColor: 'black',
		justifyContent: 'center',
		marginTop: Dimensions.get('window').height / 25,
	}
});
