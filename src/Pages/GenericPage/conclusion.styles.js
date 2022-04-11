import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F6FC",
    position: "relative",
    top: 0,
    bottom: 0
  },
  questionTextView: {
    paddingTop: 20
  },
  auxiliarText: {
    color: '#9DA8C3',
    alignSelf: "center",
    fontSize: 30,
  },
  reportView:{
    marginTop: 40,
    marginHorizontal: "5%",
    borderRadius: 30,
    padding: 20,
    backgroundColor: "white",
    height: "40%"
  },

  reportStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    borderRadius: 5 ,
    width: '100%',
    aspectRatio: 4.5,
    //padding: 7,
    //margin: 20,
    //justifyContent: 'space-between'
  },
  TextStyle: {
    color: "black",
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 30,
    textAlign: 'center',
  },
  AdditionalInfoStyle: {
    color: "#9DA8C3",
    fontSize: 14,
    marginLeft: 20  
  },
  starStyle: {
    justifyContent: 'center',
    height: "40%",
    margin: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "10%",
    marginTop: "10%",
    height: "5%",
  },
});

export default styles