import styles from './footer.styles';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { ImageBackground } from "react-native";
import { useRoute } from '@react-navigation/native';
import {SvgTask, PressedSvgTask} from '../../Resources/footerSvg'
import { SvgButton } from '../Buttons/buttons';
function navWraper(navigation, path, id) {
  return () => navigation.navigate({name:path, key:id.toString()})
}

export default function Footer({navigation}) {
  const current = useRoute().name
  let images = [] // todos os paths
  for(let i = 1; i <= 3; i++){
    images.push(SvgTask(i,40,40))
  }
  let pathName = [
    'Home',
    'Lesson',
    'Profile',
  ]
  let imNames = [
    'Tarefas',
    'Lições',
    'Perfil'
  ]
  for(let i = 0; i < 3; i++){
    if(current == pathName[i]){
      images[i] = PressedSvgTask(i+1,40,40)
      select = i
      break
    }
  }
  for(let i = 0; i < images.length; i++){
    let onPress = navWraper(navigation, pathName[i], i)
    if(i == select){
      onPress = () => 1
    }
    images[i] = (
    <View key={i}>
      <SvgButton 
        onPress = {onPress}
        svg={images[i]}/>
      <Text style={{fontSize:10, textAlign: 'center', color:(i !== select ? '#9DA8C3' : '#62E962')}}>
        {imNames[i]}
      </Text>
    </View>)
  }
  return (
    <View style={styles.footer}>
      {images}
    </View>   
  );  
}
