import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  startingView: {
    marginTop: Dimensions.get('window').height / 16
  },
  endingView: {
    marginTop: Dimensions.get('window').height / 5
    // marginBottom: 10,
  },
  viewFlex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 120,
    height:180,
    backgroundColor:'white',
    borderRadius: 54,
  },
  start_name: {
    top: 40,
    fontFamily: 'Bodoni 72 Smallcaps',
    fontSize: 30,
    textAlign: 'center',
  },
  end_name: {
    fontFamily: 'Bodoni 72 Smallcaps',
    fontSize: 30,
    textAlign: 'center',
  }
})
