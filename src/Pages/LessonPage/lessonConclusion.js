import { View, Text, Image } from "react-native"
import { GradientButton } from "../../Components/Buttons/buttons"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./lessonPage.styles"
import { GetIcon } from "../../Resources/icons"
import { useIsFocused } from "@react-navigation/native"
import React, {useState, useEffect} from 'react'
import { getMyRegister } from "../../Resources/asyncJson"

function crSubtitle(number) {
  let res = ''
  if(number < 3){
    res = 'Iniciante'
  }
  else if(number < 6) {
    res = 'Intermediario'
  }
  else if(number < 9) {
    res = 'Mestre'
  }
  else{
    res = 'Campeão'
  }
  return res
}

function titleToImg(info) {
  let dc = {
    'Casa': 'house',
    'Esporte': 'halteres',
    'Natureza': 'nature',
    'Vestuário': 'casaco'
  }
  return (dc[info] === undefined?'opened_book':dc[info])
}

async function hookWraper() {
  let response = await getMyRegister()
  let infoArr = [
    ['Casa', 0],
    ['Esporte', 0],
    ['Natureza', 0],
    ['Vestuario', 0]
  ]
  for(let i = 0; i < 4; i++) {
  
    infoArr[i][1]=(response[infoArr[i][0]])
  }
  infoArr[3][0] = 'Vestuário'
  infoArr.sort((a,b) => {
    return b[1] - a[1]
  })
  let subs = []
  let titles = []
  for(let i = 0; i < 3; i++) {
    titles.push(infoArr[i][0])
    subs.push(crSubtitle(infoArr[i][1]))
  }
  return [titles, subs]
}

export default function LessonConclusion({navigation}) {
  const [subTitles, setSubTitles] = useState(['Subtitulo','Subtitulo','Subtitulo'])
  const [titles, setTitles] = useState(['Titulo','Titulo','Titulo'])
  useEffect(() => {
    hookWraper().then((response) => {
      setTitles(response[0])
      setSubTitles(response[1])
    }).catch((error) => {
      console.log('Login Conclusion', error)
    })
  }, [])
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
                <GetIcon icon_name={titleToImg(titles[0])}/>  
              </View>
      
              <View>
                <Text style={styles.TextStyle}> {titles[0]} </Text>
                <Text style={styles.AdditionalInfoStyle}> {subTitles[0]} </Text>
              </View>
  
            </View>

            {/* Segundo Progresso */}
            <View style={styles.reportStyle}>   
          
              <View style={{height:'130%', aspectRatio:1}}>
                <GetIcon icon_name={titleToImg(titles[1])}/>  
              </View>
      
              <View>
                <Text style={styles.TextStyle}> {titles[1]} </Text>
                <Text style={styles.AdditionalInfoStyle}> {subTitles[1]} </Text>
              </View>
  
            </View>

            {/* Terceiro Progresso */}
            <View style={styles.reportStyle}>   
          
              <View style={{height:'130%', aspectRatio:1}}>
                <GetIcon icon_name={titleToImg(titles[2])}/>  
              </View>
      
              <View>
                <Text style={styles.TextStyle}> {titles[2]} </Text>
                <Text style={styles.AdditionalInfoStyle}> {subTitles[2]} </Text>
              </View>
  
            </View>



          </View>
          <View style={styles.buttons}>
            <GradientButton onPress={() => navigation.navigate("Lesson")} text={"Concluir"} lit={true}/>
          </View>
        </View>
      </View>
    </>
  )
}