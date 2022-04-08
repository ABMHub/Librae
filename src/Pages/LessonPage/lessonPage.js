import styles from "./lessonPage.styles"
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import Header from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";
import { TaskButton } from "../../Components/Buttons/buttons";
import RenderButton from "./renderButton";

export default function LessonPage({navigation}) {
    return (
        <>
          <Header navigation={navigation}/>
          <ScrollView style={styles.container}>
            <Text style={styles.subTitleStyle}> Escolha um tema </Text>
            <View>{RenderButton(navigation)}</View>
          </ScrollView>

      <Footer navigation={navigation}/>
      
    </>
  )
}