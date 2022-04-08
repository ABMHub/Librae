import { SvgXml } from "react-native-svg"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"
import styles from "./buttons.styles"
import { ImageBackground, Image, Text, View, Alert } from "react-native"

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

export function OptionButton(navigation, onPress, parms){
  let alternatives = ["a) ", "b) ", "c) ", "d) "]
  let contentList = parms.content
  let answerList = parms.answer
  let listButton = []
  //todo fazer com que os botoes mudem de cor ao serem selecionados
  for(let i = 0; i < alternatives.length; i++){
    listButton.push(
      <View key={i} style={{marginVertical: 15}}>
        <Pressable onPress={answerList[i] ? onPress.right : onPress.wrong}>
          <Text style={styles.text}>
            {alternatives[i]}{contentList[i]}
          </Text>
        </Pressable>
      </View>
    )
  }

  return listButton
}

export function ConfirmButton({navigation, onPress}){
  //todo fazer que o botao mude de cor se vc nao estiver selecionando uma alternativa
  return(
    <View style={styles.contentConfirm}>
      <Pressable style={styles.confirmButton} onPress={onPress}>
        <Text style={styles.textSelect}> Confirmar </Text>
      </Pressable>
    </View>
  )
}