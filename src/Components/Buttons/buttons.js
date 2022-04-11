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

export function OptionButton({onPress, text, style}){
  return (
    <View style={{...style, marginVertical: 10, width:"90%", paddingLeft:10, paddingVertical:3, borderRadius:20}}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>
          {text}
        </Text>
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

export function GifButton({onPress, icon_name, style}) {
  return (
    <View style={styles.img_button_div}>
      <Pressable style={{...styles.img_button, ...style}} onPress={onPress}>
        <GetGif icon_name={icon_name} style={{width: '100%', height: '100%'}}/>
      </Pressable>
    </View>
  );
}

export function GradientButton(props) {

  const {text, onPress, lit, style} = props
  const color = lit ? "#12945F" : "#9DA8C3"
  return (
    <View style={styles.cont}>
      <View style={{...styles.ConfirmButtonContainer}}>
        <Pressable style={styles.ConfirmButton} onPress={onPress}>
          <GetIcon icon_name={lit ? 'green_gradient' : "gray_gradient"}/>
          <Text style={{...styles.TextConfirm, color: color}}> {text} </Text>
        </Pressable>
      </View>
    </View>
  );
}

export function LittleGradientButton(props) {
  const {text, onPress, lit} = props
  const color = lit ? "#12945F" : "#9DA8C3"
  return (
    <View style={styles.LittleConfirmButtonContainer}>
      <Pressable style={styles.ConfirmButton} onPress={lit ? onPress : () => {}}>
        <GetIcon icon_name={lit ? 'little_green_gradient' : 'little_gray_gradient'}/>
        <Text style={{...styles.TextConfirm, color:color}}> {text} </Text>
      </Pressable>
    </View>
  );
}
