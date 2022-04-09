import { ExerciseHeader } from "../../Components/Header/header";
import { Text, View, Image, Alert } from 'react-native'
import styles from "./interpretationPage.styles";
import { OptionButton, GradientButton } from "../../Components/Buttons/buttons";
import { createQuestion } from "../../Resources/utility";
import { GetGif } from "../../Resources/getGif";

export function InterpretationPage({navigation}){
  let test = createQuestion(1)
  let img = test[1]
  let content = test[0]
  let answer = test[2]
  //todo fazer a pagina funcionar com as transicoes e tals
  return (
    <>
      <ExerciseHeader navigation={navigation}/>
      <View style={styles.content}>
        <View>
          <GetGif icon_name={img} style={styles.gifImg}/>
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
      <View style={{height: "70%"}}>    
        <GradientButton text={"Confirmar"} onPress={() => Alert.alert("Próxima questão!")}/>
      </View>
    </>
  )
}