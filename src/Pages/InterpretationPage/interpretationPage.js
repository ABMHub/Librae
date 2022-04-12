import { ExerciseHeader } from "../../Components/Header/header";
import { Text, View, Image, Alert, ScrollView } from 'react-native'
import styles from "./interpretationPage.styles";
import { OptionButton, GradientButton } from "../../Components/Buttons/buttons";
import { createQuestion, createQuestionList } from "../../Resources/utility";
import { GetGif } from "../../Resources/getGif";
import React, { useState, useEffect } from 'react'
import { TextModalCorrect, TextModalIncorrect } from "../../Components/Modal/modal";
import { editMyRegister, createMyRegister } from "../../Resources/asyncJson";

export function InterpretationPage({navigation}){
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
  //todo fazer a pagina funcionar com as transicoes e tals

  let alternatives = ["a) ", "b) ", "c) ", "d) "]
  useEffect(() => {
    if (!fetched) return
    const tempList = []
    for(let i = 0; i < alternatives.length; i++) {
      tempList.push(
        <OptionButton 
        text={alternatives[i] + content[i]}
        onPress={selected == i ? () => setSelected(-1) : () => setSelected(i)}
        // onPress={() => Alert.alert("test")}
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
  
  const questionConclusion = () => {
    setCurrentQuestion(currentQuestion+1)
    setModalCorrect(0)
    setModalIncorrect(0)
    setSelected(-1)
  }

  useEffect(() => {
    if (isModalCorrect != 2) return
    setCorrectAnswers(correctAnswers+1)
    questionConclusion()
    editMyRegister("n_inter", 1)
  }, [isModalCorrect])

  useEffect(() => {
    if (isModalIncorrect != 2) return
    questionConclusion()
  }, [isModalIncorrect])

  useEffect(() =>{
    setQuestionList(createQuestionList(3, 1))
    setCurrentQuestion(0)
    setFetched(true)
  }, [])

  const toggleModalCorrect = () => {
    setModalCorrect(isModalCorrect+1);
  };

  const toggleModalIncorrect = () => {
    setModalIncorrect(isModalIncorrect+1);
  };

  return (
    <>
      <ExerciseHeader navigation={navigation}/>
      <ScrollView>
        <View style={styles.content}>
          <View>
            <GetGif icon_name={img} style={styles.gifImg}/>
          </View>
          <View style={styles.contentQuestion}>
            <Text style={styles.text}>Traduza para linguagem escrita</Text>
          </View>
        </View>
        <View style={styles.contentAnswer}>
            {listButton}
        </View>
        <View style={{height: "70%"}}>    
          <GradientButton
            text={"Confirmar"}
            onPress={selected != -1 ? selected == answer ? toggleModalCorrect : toggleModalIncorrect : () => null}
            lit={selected != -1}
          />
        </View>
        <TextModalCorrect toggleModalVisibility={toggleModalCorrect} isModalVisible={isModalCorrect == 1} content={{"answer": content[answer], "selected": content[selected]}}/>
        <TextModalIncorrect toggleModalVisibility={toggleModalIncorrect} isModalVisible={isModalIncorrect == 1} content={{"answer": content[answer], "selected": content[selected]}}/>
      </ScrollView>
    </>
  )
}