import { View, Text, Image, Button } from "react-native"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./lessonPage.styles"
import { TextOnlyButton } from "../../Components/Buttons/buttons"
import { Alert } from "react-native"
import { LittleGradientButton } from "../../Components/Buttons/buttons"
import { createTheory } from "../../Resources/utility"
import { GetGif } from "../../Resources/getGif"
import React, { useState, useEffect } from 'react';

export default function Lesson({route, navigation}) {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [numberOfQuestions, setNumberOfQuestions] = useState(1)
  const [questions, setQuestions] = useState(null)
  console.log(questions)
  useEffect(() => {
    const numQuestions = route.params["numQuestions"]
    setNumberOfQuestions(numQuestions)
    setQuestions(createTheory(numQuestions))
  }, [])
  return (
    <>
      <ExerciseHeader navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.questionTextView}>
          <Text style={styles.auxiliarText}>Como é...</Text>
          <Text style={styles.questionText}>{questions!=null && questions[questionNumber-1]["Texto"]}</Text>
          <Text style={styles.auxiliarText}>...em libras?</Text>
        </View>
        <View style={{height: "100%", width:"100%"}}>
          <View style={styles.gifView}>
            <GetGif gif_image={questions != null && questions[questionNumber-1]["Gif"]} style={{alignSelf: "center"}} />
          </View>
          <View style={styles.buttons}>
            <View style={styles.singularButton}>
              <LittleGradientButton
                onPress={questionNumber != 1 ? () => setQuestionNumber(questionNumber-1) : () => null} 
                text={"Voltar"} 
                lit={questionNumber != 1}
              />
            </View>
            <View style={styles.singularButton}>
              <LittleGradientButton
                onPress={questionNumber != numberOfQuestions ? () => setQuestionNumber(questionNumber+1) : () => navigation.navigate("LessonConclusion")} 
                text={questionNumber != numberOfQuestions ? "Avançar" : "Finalizar"} 
                lit={true}
              />
            </View>
          </View>
        </View>
      </View>
    </>
  )
}