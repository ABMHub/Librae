import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 25
  },
  textSelect: {
    color: 'seagreen',
    fontSize: 20, 
    textAlign: "center"
  },
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
  closeButtonStyle: {
    position: "relative",
    bottom: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 10,
    borderRadius: 15,
    height: 45,
    aspectRatio: 1,
  },
  confirmButton: {
    backgroundColor: "#7cfc00",
    padding: 10,
    borderRadius: 15,
    height: 45,
    aspectRatio: 6,
  },
  contentConfirm: {
    alignSelf: "center",
    paddingTop: 40
  }
});

export default styles