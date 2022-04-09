import { ExerciseHeader } from "../../Components/Header/header";
import { Text, View, Image, Alert } from 'react-native'
import styles from "./InterpretationPage.styles";
import { OptionButton, GradientButton } from "../../Components/Buttons/buttons";
import { createQuestion } from "../../Resources/utility";

export function InterpretationPage({navigation}){
  let test = createQuestion(1)
  const img = require("../../../assets/Homer.gif")
  let content = test[0]
  let answer = test[2]
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
      <GradientButton text={"Confirmar"} onPress={() => Alert.alert("Próxima questão!")}/>
    </>
  )
}