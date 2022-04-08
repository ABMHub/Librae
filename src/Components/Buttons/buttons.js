import { SvgXml } from "react-native-svg"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"
import styles from "./buttons.styles"
import { ImageBackground, Image, View, TouchableOpacity, Text } from "react-native"
import {GetIcon} from "../../Resources/icons"

export function BackButton({navigation, onPress}) {
  const arrow = `
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7 1.5L1 7L7 12.5" stroke="#1A1C24" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `

  return (
    <Pressable style={styles.backButtonStyle} onPress={onPress}>
      <SvgXml xml={arrow} height={20} width={20} />
    </Pressable>
  )
}

export function ProfileButton({navigation, onPress}) {
  const img = require("../../../assets/icon.png")

  return (
    <Pressable style={{...styles.backButtonStyle, padding:0}} onPress={onPress}>
      <Image source={img} style={styles.perfilImg}/>
    </Pressable>
  )
}

export function CloseButton({navigation, onPress}){
  const cross = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 1L6 6M6 6L1 11M6 6L11 1M6 6L11 11" stroke="#1A1C24" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `

  return (
    <Pressable style={styles.closeButtonStyle} onPress={onPress}>
      <SvgXml xml={cross} height={20} width={20} />
    </Pressable>
  )
}

export function TaskButton(props) {
  const {onPress, icon_name, text, addtionalText} = props;

  return (
    <View style={{margin: 20}}>
 
      <TouchableOpacity style={styles.TxtButtonStyle} onPress={onPress}>   
         
        <View style={{height:'100%', aspectRatio:1}}>
          <GetIcon icon_name={icon_name}/>  
        </View>

        <View>
          <Text style={styles.TextStyle}> {text} </Text>
          <Text style={styles.AdditionalInfoStyle}> {addtionalText} </Text>
        </View>
         
         
      </TouchableOpacity>
    </View>
  )
}

export function ImgButton(props) {
  const {onPress, title, icon_name, description} = props;
  return (
    <View style={styles.img_button_div}>
      <Pressable style={styles.img_button} onPress={onPress}>
        <GetIcon height={"50%"} width={"50%"} icon_name={icon_name}/>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.descriptionStyle}>{description}</Text>
        </View>
      </Pressable>
    </View>
  );
}