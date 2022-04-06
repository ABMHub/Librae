import { SvgXml } from "react-native-svg"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"
import styles from "./buttons.styles"
import { ImageBackground, Image } from "react-native"

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