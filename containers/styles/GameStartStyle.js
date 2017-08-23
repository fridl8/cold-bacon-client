import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  startingView: {
    marginBottom: Dimensions.get('window').height / 20,
    // marginTop: 10,
  },
  endingView: {
    marginTop: Dimensions.get('window').height / 20,
    // marginBottom: 10,
  },
  viewFlex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  image: {
    top: 35,
    borderWidth:1,
    borderColor:'#c0c0c0',
    // alignItems:'center',
    // justifyContent:'center',
    width: 120,
    height:180,
    backgroundColor:'white',
    borderRadius: 54,
    resizeMode: 'contain'
  },
  start_name: {
    bottom: 40,
    fontFamily: 'Montserrat Subrayada',
    fontSize: 25,
    textAlign: 'center',
  },
  end_name: {
    top: 40,
    fontFamily: 'Montserrat Subrayada',
    fontSize: 25,
    textAlign: 'center',
  },
  pulse_image: {
    bottom: 35,
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    width: 120,
    height:180,
    backgroundColor:'white',
    borderRadius: 54,
    resizeMode: 'contain'
  },
  path_text: {
    textAlign: 'center',
    fontFamily: 'Zilla Slab Highlight',
    fontSize: 20,
  }
})
