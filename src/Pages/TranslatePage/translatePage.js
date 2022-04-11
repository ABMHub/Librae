import styles from './translatePage.styles';
import {Modal, StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header, ExerciseHeader } from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import {GradientButton} from "../../Components/Buttons/buttons";
import { RenderQuestion} from './renderQuestion';
import React, {useState, useEffect} from "react";
import { GetIcon } from '../../Resources/icons';
import { ModalCorrect, ModalIncorrect } from '../../Components/Modal/modal';
import { GifButton } from '../../Components/Buttons/buttons';
import { createQuestion } from '../../Resources/utility';

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
   const [isModalCorrect, setModalCorrect] = useState(false);
   const [isModalIncorrect, setModalIncorrect] = useState(false);
   const [img, setImg] = useState(null)
   const [content, setContent] = useState(null)
   const [answer, setAnswer] = useState(null)
   const [fetched, setFetched] = useState(false)
   const [selected, setSelected] = useState(-1)
   const [listButton, setListButton] = useState([])
 
   // Create toggleModalVisibility function that will
   // Open and close modal upon button clicks.
   const toggleModalCorrect = () => {
       setModalCorrect(!isModalCorrect);
   };

   const toggleModalIncorrect = () => {
       setModalIncorrect(!isModalIncorrect);
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
  },[fetched, selected])

  useEffect(() => {
    const test = createQuestion(0)
    setContent(test[0])
    setImg(test[1])
    setAnswer(test[2])
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
            
            <ModalCorrect toggleModalVisibility={toggleModalCorrect} isModalVisible={isModalCorrect}/>
            <ModalIncorrect toggleModalVisibility={toggleModalIncorrect} isModalVisible={isModalIncorrect}/>
          
          
          
          </ScrollView>
      
    </>
  )
}