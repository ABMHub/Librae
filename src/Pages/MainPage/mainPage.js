import styles from "./mainPage.styles"
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header, ExerciseHeader } from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { TaskButton } from "../../Components/Buttons/buttons";
import { createMyRegister } from "../../Resources/asyncJson";

export default function MainPage({navigation}) {
  createMyRegister()
  return (
    <>
      <Header navigation={navigation}/>
      <ScrollView style={styles.container}>

        <Text style={styles.subTitleStyle}> Atividades </Text>

        <View style={styles.mainContent}>
          <TaskButton
            onPress={() => navigation.navigate("Lesson")}
            icon_name="book"
            text="Lição"
            addtionalText="Aprenda sinais sobre diversos temas."
          />

          <TaskButton
            onPress={() => navigation.navigate("Translate")}
            icon_name="vocabulary"
            text="Vocabulário"
            addtionalText="Veja uma palavra e diga qual seu sinal."
          />
          
          <TaskButton
            onPress={() => navigation.navigate("Interpretation")}
            icon_name="faca_o_L"
            text="Interpretação"
            addtionalText="Veja um sinal e diga o que significa."
          />
        </View>

      </ScrollView>

      <Footer navigation={navigation}/>
      
    </>
  )
}