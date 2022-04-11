import React from "react"
import styles from "./lessonPage.styles"
import { ImgButton } from "../../Components/Buttons/buttons"
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function RenderButton(navigation) {
    return (
        <>
        <View style={styles.button_grid}>
            <ImgButton
                onPress={() => navigation.navigate("LessonLesson", {"numQuestions": 3})}
                title="Categoria 1"
                icon_name="opened_book"
                description="Descrição do que quer que esse troço tenha que fazer"
            />

            <ImgButton
                onPress={() => navigation.navigate("Home")}
                title="Categoria 2"
                icon_name="opened_book"
                description="Descrição do que quer que esse troço tenha que fazer"
            />

            <ImgButton
                onPress={() => navigation.navigate("Home")}
                title="Categoria 3"
                icon_name="opened_book"
                description="Descrição do que quer que esse troço tenha que fazer"
            />

            <ImgButton
                onPress={() => navigation.navigate("Home")}
                title="Categoria 4"
                icon_name="opened_book"
                description="Descrição do que quer que esse troço tenha que fazer"
            />

        </View>
        </>
    )
}