import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './src/Pages/MainPage/mainPage';
import LessonPage from './src/Pages/LessonPage/lessonPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="Lesson" component={LessonPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}