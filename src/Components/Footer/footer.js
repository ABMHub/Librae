import styles from './footer.styles';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions } from 'react-native';
import { ImageBackground } from "react-native";
import { useRoute } from '@react-navigation/native';

function navWraper(navigation, path, id) {
  return () => navigation.navigate({name:path, key:id.toString()})
}

export default function Footer({navigation}) {
  // const current = useRoute().name
  // let images = [] // todos os paths
  // for(i = 1; i <= 5; i++){
  //   images.push(SvgTask(i,40,40))
  // }
  // let pathName = [
  //   'Home',
  //   'RegisterDevice',
  //   'Group',
  //   'Diagnosis',
  //   'Configuration'
  // ]
  // for(i = 0; i < 5; i++){
  //   if(current == pathName[i]){
  //     images[i] = PressedSvgTask(i+1,40,40)
  //     select = i
  //     break
  //   }
  // }
  // for(i = 0; i < images.length; i++){
  //   let onPress = navWraper(navigation, pathName[i], i)
  //   if(i == select){
  //     onPress = () => 1
  //   }
  //   images[i] = <SvgButton 
  //     onPress = {onPress}
  //     svg={images[i]}
  //     key={i}
  //   />
  // }
  return (
    <View style={styles.footer}>
      <Text>footer</Text>
      {/* {images} */}
    </View>   
  );  
}
