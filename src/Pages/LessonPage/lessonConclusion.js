import { View, Text, Image } from "react-native"
import { GradientButton } from "../../Components/Buttons/buttons"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./lessonPage.styles"
import { GetIcon } from "../../Resources/icons"
import React, {useState, useEffect} from 'react'
import { getMyRegister } from "../../Resources/asyncJson"

function medal_define(stl) 
{
    let medal = ''
    let stripped = stl.split(' ')[0]
    if (stripped == 'Iniciante')
        medal = "bronze_medal"
    else if (stripped == 'Intermediario')
        medal = "silver_medal"
    else if (stripped == 'Mestre')
        medal = "gold_medal"
    else if (stripped == 'Campeão')
        medal = "ultra_medal"
    
    return medal
}

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
  return res + ` (${100*Math.min(1, number/10)}%)`
}

function titleToImg(info) {
  let dc = {
    'Casa': 'house',
    'Esporte': 'halteres',
    'Natureza': 'nature',
    'Vestuário': 'casaco'
  }
  return (dc[info] === undefined?'loading':dc[info])
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

function crInfoRows(tls, stls) {
  let infoArr = []
  for(let i = 0; i < 3; i++) {
    infoArr.push(crInfoRow(tls[i],stls[i], Number(i).toString()))
  } 
  return infoArr
}

function crInfoRow(tl, stl, id) {
  return (
      <View key={id} style={styles.reportStyle}>
        <View style={{height:'130%', aspectRatio:1}}>
          <GetIcon icon_name={titleToImg(tl)}/>  
        </View>
          
        <View>
          <Text style={styles.TextStyle}> {tl} </Text>
          <Text style={styles.AdditionalInfoStyle}> {stl} </Text>
        </View>
        <View style={{height:'90%', aspectRatio:1}}> 
          <GetIcon icon_name={medal_define(stl)}/>
        </View>
      </View>
  )
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
            {crInfoRows(titles, subTitles)}
          </View>
          <View style={styles.buttons}>
            <GradientButton onPress={() => navigation.navigate("Lesson")} text={"Concluir"} lit={true}/>
          </View>
        </View>
      </View>
    </>
  )
}