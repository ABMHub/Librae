import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './src/Pages/MainPage/mainPage';
import { InterpretationPage } from './src/Pages/InterpretationPage/InterpretationPage';
import LessonPage from './src/Pages/LessonPage/lessonPage';
import Lesson from './src/Pages/LessonPage/lessonLesson';
import TranslatePage from './src/Pages/TranslatePage/translatePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="Lesson" component={LessonPage} />
        <Stack.Screen name="LessonLesson" component={Lesson} />
        <Stack.Screen name="Translate" component={TranslatePage} />
        <Stack.Screen name="Interpretation" component={InterpretationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}