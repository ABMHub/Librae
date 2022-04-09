import styles from './translatePage.styles';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import {GradientButton} from "../../Components/Buttons/buttons";
import { RenderQuestion} from './renderQuestion';

/** 
 * @param {[string]} alternatives Lista de strings com os nomes dos gifs das alternativas 
 * @param {string} question nome que o usuário deve traduzir
 * @param {int} answer indice do item que corresponde a resposta correta (varia de 0 até 3)}
 * @param {navigation} navigation
 * @returns A tela a ser renderizada
 */
export default function TranslatePage({alternatives, question, answer, navigation}) {
  //let {alternatives, question, answer, navigation} = props
  alternatives = ["Homer", "Homer", "Homer", "Homer"]
  question = "Bom dia"
  answer = 0
  return (
        <>
          <Header navigation={navigation}/>
          <ScrollView style={styles.container}>
            <Text style={styles.TaskStyle}> Escrita para Libras </Text>
            <View>{RenderQuestion(question, alternatives, navigation)}</View>
            <GradientButton text={"Confirmar"} onPress={() => navigation.navigate("Home")}/>
          
          </ScrollView>
      
    </>
  )
}