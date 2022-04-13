import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F6FC",
    position: "relative",
    top: 0,
    bottom: 0
  },

  mainContent: {
    backgroundColor: "#F2F6FC",
    position: "relative",
    top: 0,
    bottom: 0
  },

  //main page text
  TextStyle: {
    color: "#1A1C24",
    marginBottom : 4,
    marginRight :0,
    fontSize: 20,
    padding: 20
  },

  subTitleStyle: {
    color: "#1A1C24",
    marginTop: 20,
    marginLeft: 20,
    fontSize: 24,
  },

  AdditionalInfoStyle: {
    color: "#1A1C24",
    margin: 20,
    fontSize: 24,
  },

  //Translate page text
  TaskStyle: {
    color: "#9DA8C3",
    marginTop : 4,
    fontSize: 30,
    alignSelf: 'center'
  },

  QuestionStyle: {
    color: "#1A1C24",
    marginTop : 0,
    fontSize: 30,
    alignSelf: 'center'
  },

  //Button Grid
  button_grid: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0,
    flexWrap: "wrap"
  },

  //Modal
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      elevation: 5,
      transform: [{ translateX: -(width * 0.4) }, 
                  { translateY: -90 }],
      height: height * 0.35,
      width: width * 0.8,
      backgroundColor: "#ECECF5",
      borderRadius: 7,
  },
  resultStyle: {
    width: '30%',
    aspectRatio:1,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginTop: -140,
    marginBottom:15,
  },

  img_button: {
    width: '85%',
    aspectRatio: 0.93,
    padding: 10,
    marginTop: 20,
    //alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 23,
    elevation: 3,
    backgroundColor: "#FFFFFF",
    margin: 6
  },

});

export default styles