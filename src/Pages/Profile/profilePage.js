import { View, Text, Image } from "react-native"
import { GradientButton } from "../../Components/Buttons/buttons"
import { ExerciseHeader } from "../../Components/Header/header"
import styles from "./profilePage.styles"
import { GetIcon } from "../../Resources/icons"
import { Header } from "../../Components/Header/header"

/** 
 * @param {int} number número a ser convertido em um nível
 * @returns ranking
 */
function level_define(number)
{
    let rank = ''
    if (number < 3)
        rank = "Iniciante"
    else if (number < 6)
        rank = "Veterano"
    else if (number < 9)
        rank = "Mestre"
    else if (number >= 9)
        rank = "Campeão"
    
    return rank
}

/** 
 * @param {int} n_inter número de exercícios de interpretação realizados
 * @param {int} n_trans número de exercícios de tradução realizados
 * @param {int} n_less número de lições realizadas
 * @param {navigation} navigation
 * @returns A tela a ser renderizada
 */
export default function Profile({n_inter=0, n_trans=0, n_less=0, navigation}) {
  let inter_level = ''
  
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
                            <Text style={styles.AdditionalInfoStyle}> {level_define(n_less)} </Text>
                        </View>       

                        <View style={{height:'100%', aspectRatio:1}}>
                            <GetIcon icon_name={"opened_book"}/>  
                        </View>
                    
                    </View>
                        

                    {/* COLOCAR O SLIDER NO LUGAR DESSA VIEW AQUI */}
                    <View style={{backgroundColor: 'black', height:'1%'}}>
                    {/*lembra de tirar o estilo dessa view */} 
                    </View>
                </View>

                <View>
                    <View style={styles.TextImageStyle}>        
                    
                        <View> 
                            <Text style={styles.TextStyle}> {"Traduções Realizadas"}  </Text>
                            <Text style={styles.AdditionalInfoStyle}> {level_define(n_trans)}  </Text>
                        </View>       

                        <View style={{height:'100%', aspectRatio:1}}>
                            <GetIcon icon_name={"opened_book"}/>  
                        </View>
                    
                    </View>
                        

                    {/* COLOCAR O SLIDER NO LUGAR DESSA VIEW AQUI */}
                    <View style={{backgroundColor: 'black', height:'1%'}}>
                    {/*lembra de tirar o estilo dessa view */} 
                    </View>
                </View>

                <View>
                    <View style={styles.TextImageStyle}>        
                    
                        <View> 
                            <Text style={styles.TextStyle}> {"Interpretações Realizadas"}  </Text>
                            <Text style={styles.AdditionalInfoStyle}> {level_define(n_inter)}  </Text>
                        </View>       

                        <View style={{height:'100%', aspectRatio:1}}>
                            <GetIcon icon_name={"opened_book"}/>  
                        </View>
                    
                    </View>
                        

                    {/* COLOCAR O SLIDER NO LUGAR DESSA VIEW AQUI */}
                    <View style={{backgroundColor: 'black', height:'1%'}}>
                    {/*lembra de tirar o estilo dessa view */} 
                    </View>
                </View>
            </View>

            
            
        

            
        </View>
    </View>
    </>
  )
}