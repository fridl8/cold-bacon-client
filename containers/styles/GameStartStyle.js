import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  startingView: {
    marginTop: Dimensions.get('window').height / 30
  },
  endingView: {
    marginTop: Dimensions.get('window').height / 5
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
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    // width: 180,
    width: 120,
    height:180,
    backgroundColor:'white',
    // borderRadius: 90,
    borderRadius: 54,
    // resizeMode: 'cover',
    resizeMode: 'contain'
  },
  start_name: {
    top: 22,
    fontFamily: 'Montserrat Subrayada',
    fontSize: 25,
    textAlign: 'center',
  },
  end_name: {
    fontFamily: 'Montserrat Subrayada',
    fontSize: 25,
    textAlign: 'center',
  },
  pulse_image: {
    borderWidth:1,
    borderColor:'#c0c0c0',
    alignItems:'center',
    justifyContent:'center',
    // width: 180,
    width: 120,
    height:180,
    backgroundColor:'white',
    // borderRadius: 90,
    borderRadius: 54,
    // resizeMode: 'cover',
    resizeMode: 'contain'
  }
})
