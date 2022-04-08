import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  backButtonStyle: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 15,
    height: 45,
    aspectRatio: 1,
  },
  perfilImg: {
    width:"100%",
    height:"100%",
    borderRadius: 15,
  },

  //Task Button
  TxtButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fdfdfd',
    borderRadius: 5 ,
    width: '100%',
    aspectRatio: 4.5,
    padding: 7,
    //justifyContent: 'space-between'
  },
  TextStyle: {
    color: "#1A1C24",
    marginRight :0,
    fontSize: 20,
    paddingLeft: 20
  },

  AdditionalInfoStyle: {
    color: "#9DA8C3",
    fontSize: 14,
    paddingLeft: 20
    
  }

});

export default styles