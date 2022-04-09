import { ExerciseHeader } from "../../Components/Header/header";
import { Text, View, Image, Alert } from 'react-native'
import styles from "./InterpretationPage.styles";
import { OptionButton, ConfirmButton } from "../../Components/Buttons/buttons";

export function InterpretationPage({navigation}){
  const img = require("../../../assets/Homer.gif")
  let content = ["O céu é verde", "Fui na festa", "Pônei", "Bom dia"]
  let answer = [false, false, false, true]
  //todo fazer a pagina funcionar com as transicoes e tals
  return (
    <>
      <ExerciseHeader navigation={navigation}/>
      <View style={styles.content}>
        <View>
          <Image source={img} style={styles.gifImg}></Image>
        </View>
        <View style={styles.contentQuestion}>
          <Text style={styles.text}>Traduza para linguagem escrita</Text>
        </View>
      </View>
      <View style={styles.contentAnswer}>
          {OptionButton(navigation, 
          {"right": () => Alert.alert("Resposta Correta!"), "wrong": () => Alert.alert("Resposta Errada!")}, 
          {"content": content, "answer": answer})}
      </View>
      <ConfirmButton navigation={navigation} onPress={() => Alert.alert("Próxima questão!")}/>
    </>
  )
}