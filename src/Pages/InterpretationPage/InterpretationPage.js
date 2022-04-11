import { ExerciseHeader } from "../../Components/Header/header";
import { Text, View, Image, Alert } from 'react-native'
import styles from "./interpretationPage.styles";
import { OptionButton, GradientButton } from "../../Components/Buttons/buttons";
import { createQuestion } from "../../Resources/utility";
import { GetGif } from "../../Resources/getGif";
import React, { useState, useEffect } from 'react'

export function InterpretationPage({navigation}){
  const [img, setImg] = useState(null)
  const [content, setContent] = useState(null)
  const [answer, setAnswer] = useState(null)
  const [fetched, setFetched] = useState(false)
  const [selected, setSelected] = useState(-1)
  const [listButton, setListButton] = useState([])
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
  },[fetched, selected])

  useEffect(() => {
    const test = createQuestion(1)
    setContent(test[0])
    setImg(test[1])
    setAnswer(test[2])
    setFetched(true)
  }, [])
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
          {listButton}
      </View>
      <View style={{height: "70%"}}>    
        <GradientButton
          text={"Confirmar"}
          onPress={selected != -1 ? () => Alert.alert("Funcao para decidir se esta certo ou nao!") : () => null}
          lit={selected != -1}
        />
      </View>
    </>
  )
}