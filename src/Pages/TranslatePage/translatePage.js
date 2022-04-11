import styles from './translatePage.styles';
import {Modal, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header, ExerciseHeader } from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import {GradientButton} from "../../Components/Buttons/buttons";
import { RenderQuestion} from './renderQuestion';
import React, {useState, useEffect} from "react";
import { GetIcon } from '../../Resources/icons';
import { TextModalCorrect, TextModalIncorrect, ModalCorrect, ModalIncorrect } from '../../Components/Modal/modal';

import { GifButton } from '../../Components/Buttons/buttons';
import { createQuestion, createQuestionList } from '../../Resources/utility';

/** 
 * @param {[string]} alternatives Lista de strings com os nomes dos gifs das alternativas 
 * @param {string} question nome que o usuário deve traduzir
 * @param {int} answer indice do item que corresponde a resposta correta (varia de 0 até 3)}
 * @param {navigation} navigation
 * @returns A tela a ser renderizada
 */
export default function TranslatePage({alternatives, navigation}) {
  //let {alternatives, question, answer, navigation} = props

   // This is to manage Modal State
  const [img, setImg] = useState(null)
  const [content, setContent] = useState({})
  const [answer, setAnswer] = useState(null)
  const [fetched, setFetched] = useState(false)
  const [selected, setSelected] = useState(-1)
  const [listButton, setListButton] = useState([])
  const [questionList, setQuestionList] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(-1)
  const [isModalCorrect, setModalCorrect] = useState(0);
  const [isModalIncorrect, setModalIncorrect] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
 
   // Create toggleModalVisibility function that will
   // Open and close modal upon button clicks.
   const toggleModalCorrect = () => {
    setModalCorrect(isModalCorrect+1);
  };

  const toggleModalIncorrect = () => {
    setModalIncorrect(isModalIncorrect+1);
  };

  useEffect(() => {
    if (!fetched) return
    const tempList = []
    for(let i = 0; i < 4; i++) {
      tempList.push(
        <GifButton 
          onPress={selected == i ? () => setSelected(-1) : () => setSelected(i)}
          icon_name={content[i]}
          style={{backgroundColor: selected != i ? "white" : "cyan"}}
          key={i}
        />
      )
    }
    setListButton(tempList)
  },[answer, selected, img, content])

  useEffect(() => {
    if (!fetched) return
    if (currentQuestion == 3) return navigation.navigate("ExerciseConclusion", {"n_correct": correctAnswers})
    const exercise = questionList[currentQuestion]
    setContent(exercise[0])
    setImg(exercise[1])
    setAnswer(exercise[2])
  }, [currentQuestion])
  
  useEffect(() => {
    if (isModalCorrect != 2) return
    setCurrentQuestion(currentQuestion+1)
    setCorrectAnswers(correctAnswers+1)
    setModalCorrect(0)
    setSelected(-1)
  }, [isModalCorrect])

  useEffect(() => {
    if (isModalIncorrect != 2) return
    setCurrentQuestion(currentQuestion+1)
    setModalIncorrect(0)
    setSelected(-1)
  }, [isModalIncorrect])

  useEffect(() =>{
    setQuestionList(createQuestionList(3, 0))
    setCurrentQuestion(0)
    setFetched(true)
  }, [])

  return (
    <>
      <ExerciseHeader navigation={navigation}/>
      <ScrollView style={styles.container}>
        <Text style={styles.TaskStyle}> Escrita para Libras </Text>
        <Text style={styles.QuestionStyle}> {img} </Text>
        <View style={styles.button_grid}>
          {listButton}
        </View>
        <GradientButton text={"Confirmar"} onPress={answer == selected ? toggleModalCorrect : toggleModalIncorrect} lit={selected != -1}/>     
        
        <ModalCorrect toggleModalVisibility={toggleModalCorrect} isModalVisible={isModalCorrect == 1} content={{"answer": content[answer], "selected": content[selected]}}/>
        <ModalIncorrect toggleModalVisibility={toggleModalIncorrect} isModalVisible={isModalIncorrect == 1} content={{"answer": content[answer], "selected": content[selected]}}/>
    
      </ScrollView>
    </>
  )
}