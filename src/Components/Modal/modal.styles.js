import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  //Modal
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  modalView: {
      //alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      elevation: 5,
      transform: [{ translateX: -(width * 0.4) }, 
                  { translateY: -250 }],
      height: height * 0.7,
      width: width * 0.8,
      backgroundColor: "#ECECF5",
      borderRadius: 20,
  },

  correctTitleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#fdfdfd',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20, 
    width: '100%',
    aspectRatio: 4.5,
    padding: 10,
    justifyContent: 'space-between',
    marginTop: -130,
  },

  resultStyle: {
    width: '30%',
    aspectRatio:1,
    marginRight: -20,
    //alignSelf: 'flex-end',
    
  },
  titleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#fdfdfd',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20, 
    width: '100%',
    aspectRatio: 4.5,
    padding: 10,
    justifyContent: 'space-between',
    marginTop: -100,
  },

  resultTextStyle: {
    alignSelf: 'center',
    marginLeft: 15,
    fontSize: 20,
    color: "#03D691",
  },

  textStyle: {
    //marginTop: 4,
    alignSelf: 'center',
    //marginLeft: 15,
    fontSize: 40,
    color: "#03D691",
  },

  //Gif
  correct_img_button_div: {
    width: '70%',
    aspectRatio: 0.90,
    alignItems: 'center',
    alignSelf: 'center',
  },

  img_button_div: {
    width: '50%',
    aspectRatio: 0.90,
    alignItems: 'center',
    
  },

  img_button: {
    width: '100%',
    aspectRatio: 0.93,
    padding: 10,
    marginTop: 20,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 23,
    elevation: 3,
    backgroundColor: "#FFFFFF",
    //margin: 6
  },

  //Incorrect modal
  //Gif
  incorrect_img_button_div: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  incorrect_img_button: {
    width: '35%',
    aspectRatio: 0.93,
    padding: 10,
    marginTop: 5,
    marginHorizontal: 30,
    borderRadius: 23,
    elevation: 3,
    backgroundColor: "#FFFFFF",
  },

  incorrectTextStyle: {
    marginTop: 4,
    fontSize: 20,
    color: "#FF3B5E",
  },

  incorrectModalView: {
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
                { translateY: -250 }],
    height: height * 0.7,
    width: width * 0.8,
    backgroundColor: "#ECECF5",
    borderRadius: 20,
},


})

export default styles