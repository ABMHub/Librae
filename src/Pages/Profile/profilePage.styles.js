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
    paddingTop: 30
  },
  auxiliarText: {
    color: 'black',
    alignSelf: "center",
    fontSize: 30,
  },
  reportView:{
    marginTop: '3%',
    marginHorizontal: "5%",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "white",
    height: "56%"
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
    fontSize: 18,
    // alignSelf: 'center',
    //marginTop: 30,
    // textAlign: 'center',
  },
  AdditionalInfoStyle: {
    color: "black",
    fontSize: 14,
    marginLeft: 3
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

  //Task Button
  TextImageStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    borderRadius: 5 ,
    width: '100%',
    aspectRatio: 4.5,
    //padding: 7,
    marginVertical: 10,
    justifyContent: 'space-between',
  },


});

export default styles