import { View, Text, Image } from "react-native"
import { GradientButton } from "../../Components/Buttons/buttons"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./lessonPage.styles"

export default function LessonConclusion({navigation}) {
  const img = require("../../../assets/gesture.png")
  return (
    <>
      <ExerciseHeader navigation={navigation} />
      <View>
        <View style={styles.questionTextView}>
          <Text style={styles.auxiliarText}>Lição Concluída!</Text>
        </View>
        <View style={{height: "100%", width:"100%"}}>
          <View style={styles.gifView}>
          <Text style={styles.auxiliarText}>Confira seu progresso:</Text>
            <Image source={img} style={{alignSelf: "center"}}/>
          </View>
          <View style={styles.buttons}>
            <GradientButton onPress={() => navigation.navigate("LessonPage")} text={"Concluir"} />
          </View>
        </View>
      </View>
    </>
  )
}