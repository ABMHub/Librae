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
    color: 'black',
    alignSelf: "center",
    fontSize: 30,
  },
  reportView:{
    marginTop: 30,
    marginHorizontal: "5%",
    borderRadius: 30,
    padding: 20,
    backgroundColor: "white",
    height: "50%"
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
    fontSize: 20,
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