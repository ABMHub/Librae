import styles from './header.styles.js';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { ImageBackground, Alert } from "react-native";
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton, CloseButton, ProfileButton } from '../Buttons/buttons.js';

export function Header({ navigation }) {
  const current = useRoute().name
  let page_name
  switch(current) {
    case "Home":
      page_name = "Página Inicial"
      break
    default:
      page_name = "Configure na header"
      break
  }
  return (
    <View style={{...styles.header, height: Math.floor(Dimensions.get('window').height * 0.15)}}>
      <SafeAreaView>
        <View style={styles.content}>
          <BackButton navigation={navigation} onPress={() => Alert.alert("Botao back apertado")} />
          <View><Text style={styles.text}>{page_name}</Text></View>        
          <ProfileButton navigation={navigation} onPress={() => Alert.alert("Botao perfil apertado")} />
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
    case "Conversa":
      page_name = "Conversa"
      break
    default:
      page_name = "Tradução"
      break
  }
  return (
    <View style={{...styles.exerciseHeader, height: Math.floor(Dimensions.get('window').height * 0.15)}}>
      <SafeAreaView>
        <View style={styles.contentExercise}>
          <CloseButton navigation={navigation} onPress={() => Alert.alert("Botao de fechar apertado")} />
          <View style={{paddingRight: "25%"}}><Text style={styles.text}>{page_name}</Text></View>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}