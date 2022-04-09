import { SvgXml } from "react-native-svg"
import Pressable from "react-native/Libraries/Components/Pressable/Pressable"
import styles from "./buttons.styles"
import { ImageBackground, Image, View, TouchableOpacity, Text, Alert} from "react-native"
import {GetIcon} from "../../Resources/icons"
import {GetGif} from "../../Resources/getGif"

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

export function GifButton(props) {
  const {onPress, icon_name, style} = props;

  return (
    <View style={styles.img_button_div}>
      <Pressable style={styles.img_button} onPress={onPress}>
        <GetGif icon_name={icon_name} style={{width: '100%', height: '100%'}}/>
      </Pressable>
    </View>
  );
}

export function GradientButton(props) {
  const {text, onPress} = props
  return (
    <View style={styles.ConfirmButtonContainer}>
      <Pressable style={styles.ConfirmButton} onPress={onPress}>
        <GetIcon icon_name={'green_gradient'}/>
        <Text style={styles.TextConfirm}> {text} </Text>
      </Pressable>
    </View>
  );
}
