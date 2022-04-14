import styles from './header.styles.js';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { ImageBackground, Alert } from "react-native";
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton, CloseButton, ProfileButton } from '../Buttons/buttons.js';
import { GetIcon } from '../../Resources/icons.js';

export function Header({ navigation }) {
  const current = useRoute().name
  let page_name
  switch(current) {
    case "Home":
      page_name = "Página Inicial"
      break
    default:
      page_name = "Lição"
      break
  }

  const isHome = current == 'Home' 

  return (
    <View style={{...styles.header, height: Math.floor(Dimensions.get('window').height * 0.25)}}>
      <SafeAreaView>
        <View style={styles.content}>
          <BackButton optional={isHome ? 'white' : '#d0d0d0'} navigation={navigation} onPress={isHome ? null : () => navigation.goBack()} />
          {/* <View><Text style={styles.text}>{page_name}</Text></View>         */}
          <View style={{width:'50%'}}>  
            <GetIcon icon_name={"logo"}/>
          </View>
          <ProfileButton navigation={navigation} onPress={() => navigation.navigate("Profile")} />
        </View>
      <StatusBar style="auto" />
      </SafeAreaView>
      
      
    </View>
  );
}

export function ExerciseHeader({navigation}){
  const current = useRoute().name
  let page_name
  switch(current) {
    case "Translate":
      page_name = "Vocabulário"
      break
    case "Interpretation":
      page_name = "Interpretação"
      break
    case "LessonLesson":
      page_name = "Lição"
      break
    case "LessonConclusion":
      page_name = "Lição"
      break
    case "ExerciseConclusion":
      page_name = "Resultados"
      break
    default:
      page_name = "Configure na Header"
      break
  }
  
  return (
    <View style={{...styles.exerciseHeader, height: Math.floor(Dimensions.get('window').height * 0.16)}}>
      <SafeAreaView>
        <View style={styles.contentExercise}>
          <CloseButton navigation={navigation} onPress={() => navigation.navigate("Home")}/>
          <View style={{paddingRight: "15%"}}><Text style={styles.text}>{page_name}</Text></View>
          <View></View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}