import { View, Text, Image } from "react-native"
import { GradientButton } from "../../Components/Buttons/buttons"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./conclusion.styles"
import { GetIcon } from "../../Resources/icons"

/** 
 * @param {route} route Seguindo a estrurura de "{"n_correct": correctAnswers}"
 * @param {navigation} navigation
 * @returns A tela a ser renderizada
 */

export default function ExerciseConclusion({route, navigation}) {
  const img = require("../../../assets/gesture.png")
  //let number = 0
  const number = route.params["n_correct"]
  let result = "Continue tentando!"
  
  if(number >= 2)
    result = "Parabéns!"

  return (
    <>
      <ExerciseHeader navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.questionTextView}>
          <Text style={styles.auxiliarText}>Exercício Concluído!</Text>
        </View>

        <View style={{height: "100%", width:"100%"}}>
          <View style={styles.reportView}>
            <Text style={styles.auxiliarText}>Confira seu progresso:</Text>

            {/* Primeiro Progresso */}
            <View >   
              <Text style={styles.TextStyle}> {"Você acertou " + number + "/3 questões"}  </Text>
            </View>

            <View style={styles.starStyle}> 
              <GetIcon icon_name="triple_star" optional={number}/>
            </View>
          </View>

          <View >   
              <Text style={styles.TextStyle}> {result}  </Text>
          </View>

          <View style={styles.buttons}>
            <GradientButton onPress={() => navigation.navigate("Home")} text={"Concluir"} lit={true}/>
          </View>
        </View>
      </View>
    </>
  )
}