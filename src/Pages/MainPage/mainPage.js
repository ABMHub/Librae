import styles from "./mainPage.styles"
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { Header, ExerciseHeader } from "../../Components/Header/header";
import Footer from "../../Components/Footer/footer";

export default function MainPage({navigation}) {
  return (
    <>
      {/* <View style={{...styles.container}}> */}
        <Header navigation={navigation}/>
        <View style={styles.mainContent}>
          <Text>Oi</Text>
        </View>
        <Footer navigation={navigation}/>
      {/* </View> */}
    </>
  )
}