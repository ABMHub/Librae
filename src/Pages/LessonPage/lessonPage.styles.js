import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

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

  //Button Grid
  button_grid: {
    // backgroundColor: "black",
    // alignItems: 'center',
    // justifyContent: 'center',
    // display: 'flex',
    //width: "100%",
    flexDirection: 'row',
    padding: 10,
    flexWrap: "wrap"
  },
  questionTextView: {
    paddingTop: 20
  },
  auxiliarText: {
    color: 'gray',
    alignSelf: "center",
    fontSize: 30,
  },
  questionText: {
    alignSelf: "center",
    color: 'black',
    fontSize: 40,
  },
  gifView:{
    marginTop: 40,
    marginHorizontal: "10%",
    borderRadius: 30,
    padding: 20,
    backgroundColor: "white",
    height: "35%"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "10%",
    marginTop: "10%",
    height: "5%",
  },
  singularButton: {
    width: "45%",
    height: "100%"
  }
});

export default styles