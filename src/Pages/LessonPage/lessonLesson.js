import { View, Text, Image, Button } from "react-native"
import { ImgButton } from "../../Components/Buttons/buttons"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./lessonPage.styles"
import { TextOnlyButton } from "../../Components/Buttons/buttons"
import { Alert } from "react-native"

/** 
 * @param {[string]} alternatives Lista de strings com os nomes dos gifs das alternativas 
 * @param {string} question nome que o usuário deve traduzir
 * @param {int} answer indice do item que corresponde a resposta correta (varia de 0 até 3)}
 * @param {navigation} navigation
 * @returns A tela a ser renderizada
 */
export default function Lesson({navigation}) {
  const img = require("../../../assets/gesture.png")
  return (
    <>
      <ExerciseHeader navigation={navigation} />
      <View>
        <View style={styles.questionTextView}>
          <Text style={styles.auxiliarText}>Como é...</Text>
          <Text style={styles.questionText}>Bom dia</Text>
          <Text style={styles.auxiliarText}>...em libras?</Text>
        </View>
        <View style={{height: "100%", width:"100%"}}>
          <View style={styles.gifView}>
            <Image source={img} style={{alignSelf: "center"}}/>
          </View>
          <View style={styles.buttons}>
            <View style={styles.singularButton}>
              <Button onPress={() => Alert.alert("Butao apertado")} title={"Voltar"} lit={false}/>
            </View>
            <View style={styles.singularButton}>
              <Button onPress={() => Alert.alert("Butao apertado")} title={"Avancar"} lit={true}/>
            </View>
          </View>
        </View>
      </View>
    </>
  )
}