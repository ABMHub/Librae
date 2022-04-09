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

  //Translate page text
  TaskStyle: {
    color: "#9DA8C3",
    marginTop : 4,
    fontSize: 30,
    alignSelf: 'center'
  },

  QuestionStyle: {
    color: "#1A1C24",
    marginTop : 4,
    fontSize: 30,
    alignSelf: 'center'
  },

  //Button Grid
  button_grid: {
    flexDirection: 'row',
    padding: 10,
    flexWrap: "wrap"
  },
});

export default styles