import styles from "./mainPage.styles"
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { TaskButton } from "../../Components/Buttons/buttons";

export default function MainPage({navigation}) {
  return (
    <>
      <Header navigation={navigation}/>
      <ScrollView style={styles.container}>

        <Text style={styles.subTitleStyle}> Atividades </Text>

        <View style={styles.mainContent}>
          <TaskButton
            onPress={() => navigation.navigate("Lesson")}
            icon_name="opened_book"
            text="Interpretação"
            addtionalText="adicional"
          />

          <TaskButton
            onPress={() => navigation.navigate("Home")}
            icon_name="closed_book"
            text="Interpretação"
            addtionalText="adicional"
          />
          
          <TaskButton
            onPress={() => navigation.navigate("Home")}
            icon_name="closed_book"
            text="Interpretação"
            addtionalText="adicional"
          />
        </View>

      </ScrollView>

      <Footer navigation={navigation}/>
      
    </>
  )
}