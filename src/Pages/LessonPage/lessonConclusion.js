import { View, Text, Image } from "react-native"
import { GradientButton } from "../../Components/Buttons/buttons"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./lessonPage.styles"
import { GetIcon } from "../../Resources/icons"

export default function LessonConclusion({navigation}) {
  const img = require("../../../assets/gesture.png")
  return (
    <>
      <ExerciseHeader navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.questionTextView}>
          <Text style={styles.auxiliarText}>Lição Concluída!</Text>
        </View>

        <View style={{height: "100%", width:"100%"}}>
          <View style={styles.reportView}>
            <Text style={styles.auxiliarText}>Confira seu progresso:</Text>

            {/* Primeiro Progresso */}
            <View style={styles.reportStyle}>   
          
              <View style={{height:'130%', aspectRatio:1}}>
                <GetIcon icon_name='opened_book'/>  
              </View>
      
              <View>
                <Text style={styles.TextStyle}> Titulo </Text>
                <Text style={styles.AdditionalInfoStyle}> Subtitulo </Text>
              </View>
  
            </View>

            {/* Segundo Progresso */}
            <View style={styles.reportStyle}>   
          
              <View style={{height:'130%', aspectRatio:1}}>
                <GetIcon icon_name='opened_book'/>  
              </View>
      
              <View>
                <Text style={styles.TextStyle}> Titulo </Text>
                <Text style={styles.AdditionalInfoStyle}> Subtitulo </Text>
              </View>
  
            </View>

            {/* Terceiro Progresso */}
            <View style={styles.reportStyle}>   
          
              <View style={{height:'130%', aspectRatio:1}}>
                <GetIcon icon_name='opened_book'/>  
              </View>
      
              <View>
                <Text style={styles.TextStyle}> Titulo </Text>
                <Text style={styles.AdditionalInfoStyle}> Subtitulo </Text>
              </View>
  
            </View>



          </View>
          <View style={styles.buttons}>
            <GradientButton onPress={() => navigation.navigate("LessonPage")} text={"Concluir"} lit={true}/>
          </View>
        </View>
      </View>
    </>
  )
}