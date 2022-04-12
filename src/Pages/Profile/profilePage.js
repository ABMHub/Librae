import { View, Text, Image } from "react-native"
import { GradientButton } from "../../Components/Buttons/buttons"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./profilePage.styles"
import { GetIcon } from "../../Resources/icons"
import { Header } from "../../Components/Header/header"
import { chColor } from "../../Resources/colorChanges"
import Footer from "../../Components/Footer/footer"
import { getMyRegister } from "./../../Resources/asyncJson"
// import { useEffect } from "react/cjs/react.production.min"
import React, {useState, useEffect} from 'react'

/** 
 * @param {int} number número a ser convertido em um nível
 * @returns ranking
 */
function level_define(number)
{
	let rank = ''
	if (number < 9)
		rank = "Iniciante"
	else if (number < 18)
		rank = "Veterano"
	else if (number < 27)
		rank = "Mestre"
	else if (number >= 27)
		rank = "Campeão"
	
	return rank
}

function sliderCol(number) {
	let colors = [
		'#AEFF02',
		'#F8E432',
		'#FF6536',
		'#DD4220'
	]
	if(number >= 27){
		return colors[colors.length-1] 
	}

	let prob = (number - 9*Math.floor(number/9))/9
	return chColor(prob, colors[Math.floor(number/9)], colors[Math.ceil(number/9)])
}

function sliderComp(number) {
	let col = sliderCol(number)
	return (
		<View style={{height:'5%'}}>
			<View style={{
				  elevation: 3,
				  backgroundColor:col,
				  alignSelf:'flex-start', 
				  width:`${Math.min(number/27, 1)*100}%`,
				  height:'100%',}}>
			</View>
		</View>
	);
}

/** 
 * @param {int} n_inter número de exercícios de interpretação realizados
 * @param {int} n_trans número de exercícios de tradução realizados
 * @param {int} n_less número de lições realizadas
 * @param {navigation} navigation
 * @returns A tela a ser renderizada
 */
export default function Profile({navigation}) {
  let inter_level = ''
//   n_inter=8, n_trans=17, n_less=26, 

	const [interpretation, setInterpretation] = useState(0)
	const [translate, setTranslate] = useState(0)
	const [lessons, setLessons] = useState(0)

	useEffect(() => {
		getMyRegister().then((response) => {
			setInterpretation(response["n_inter"])
			setTranslate(response["n_trans"])
			setLessons(response["n_less"])
		}).catch("Deu ruim - profilePage")
	}, [])
  
  return (
	<>
	<Header navigation={navigation} />
	  
	<View style={styles.container}>
		<View style={{height: "100%", width:"100%"}}>
			<View style={styles.reportView}>
				
				<Text style={styles.auxiliarText}>Confira seu progresso:</Text>

				<View>
					<View style={styles.TextImageStyle}>        
					
						<View> 
							<Text style={styles.TextStyle}> {"Lições Realizadas"}  </Text>
							<Text style={styles.AdditionalInfoStyle}> {level_define(lessons)} </Text>
						</View>       

						<View style={{height:'100%', aspectRatio:1}}>
							<GetIcon icon_name={"opened_book"}/>  
						</View>
					
					</View>
					{/* !!! SLIDER COMPONENT !!! */}
					{sliderComp(lessons)}
				</View>

				<View>
					<View style={styles.TextImageStyle}>        
					
						<View> 
							<Text style={styles.TextStyle}> {"Traduções Realizadas"}  </Text>
							<Text style={styles.AdditionalInfoStyle}> {level_define(translate)}  </Text>
						</View>       

						<View style={{height:'100%', aspectRatio:1}}>
							<GetIcon icon_name={"opened_book"}/>  
						</View>
					
					</View>
						

					{/* !!! SLIDER COMPONENT !!! */}
					{sliderComp(translate)}
				</View>

				<View>
					<View style={styles.TextImageStyle}>        
					
						<View> 
							<Text style={styles.TextStyle}> {"Interpretações Realizadas"}  </Text>
							<Text style={styles.AdditionalInfoStyle}> {level_define(interpretation)}  </Text>
						</View>       

						<View style={{height:'100%', aspectRatio:1}}>
							<GetIcon icon_name={"opened_book"}/>  
						</View>
					
					</View>
						

					{/* !!! SLIDER COMPONENT !!! */}
					{sliderComp(interpretation)}
				</View>
			</View>
		</View>
	</View>
	<Footer navigation={navigation}/>
	</>
  )
}