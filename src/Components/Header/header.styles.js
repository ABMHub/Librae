import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 30
  },
  content: {
    flexDirection: 'row',
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between"
  },
  contentExercise: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 10,
    justifyContent: "space-between"
  },
  header: {
    backgroundColor: "white",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  exerciseHeader: {
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});

export default styles