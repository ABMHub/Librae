import { View, Text, Image, Button } from "react-native"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./lessonPage.styles"
import { TextOnlyButton } from "../../Components/Buttons/buttons"
import { Alert } from "react-native"
import { LittleGradientButton } from "../../Components/Buttons/buttons"
import { createTheory } from "../../Resources/utility"
import { GetGif } from "../../Resources/getGif"
import React, { useState, useEffect } from 'react';
import { editMyRegister, editMyRegisters } from "../../Resources/asyncJson"
import {sliderComp} from '../Profile/profilePage'

function parse(info) {
  if(info === 'Vestuário'){
    return 'Vestuario'
  }
  return info
}

export default function Lesson({route, navigation}) {
  const [questionNumber, setQuestionNumber] = useState(0)
  const [numberOfQuestions, setNumberOfQuestions] = useState(1)
  const [questions, setQuestions] = useState(null)
  const [questionsViewed, setQuestionsViewed] = useState(0)
  
  useEffect(() => {
    if (questionsViewed == 0) return
    editMyRegisters(["n_less", parse(route.params['category'])], [1,1])
  }, [questionsViewed])
  
  useEffect(() => {
    if (questionNumber == 0) return
    if (questionNumber > questionsViewed) setQuestionsViewed(questionNumber)
  }, [questionNumber])

  useEffect(() => {
    const numQuestions = route.params["numQuestions"]
    const category = route.params["category"]
    setNumberOfQuestions(numQuestions)
    setQuestions(createTheory(numQuestions, category))
    setQuestionNumber(1)
  }, [])

  return (
    <>
      <ExerciseHeader navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.questionTextView}>
          <Text style={{fontFamily:'monospace', alignSelf:'center',color:'#9DA8C3', marginBottom:'1%'}}>{`Progresso atual ${questionNumber}/3`}</Text>
          <View style={{height:'3%', width:'90%', marginHorizontal:'5%', marginBottom:'4%'}}>
            {sliderComp(questionNumber*9)}
          </View>
          <Text style={styles.auxiliarText}>Como é...</Text>
          <Text style={styles.questionText}>{questions!=null && questions[questionNumber-1]["Texto"]}</Text>
          <Text style={styles.auxiliarText}>...em libras?</Text>
        </View>
        <View style={{height: "100%", width:"100%"}}>
          <View style={{...styles.gifView, flexDirection: 'row'}}>
            <View style={{flex:1,flexDirection:'column'}}>
              <GetGif icon_name={questions != null && questions[questionNumber-1]["Gif"]} style={{flex:1, alignSelf: 'center'}} />
            </View>
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