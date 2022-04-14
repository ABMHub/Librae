import React from "react"
import styles from "./lessonPage.styles"
import { ImgButton } from "../../Components/Buttons/buttons"
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default function RenderButton(navigation) {
    return (
        <>
        <View style={styles.button_grid}>
            <ImgButton
                onPress={() => navigation.navigate("LessonLesson", {"numQuestions": 3, "category": "Casa"})}
                title="Casa"
                icon_name="house"
                description="Móveis, Eletrodomésticos..."
            />

            <ImgButton
                onPress={() => navigation.navigate("LessonLesson", {"numQuestions": 3, "category": "Esporte"})}
                title="Esporte"
                icon_name="halteres"
                description="Competições, futebol..."
            />

            <ImgButton
                onPress={() => navigation.navigate("LessonLesson", {"numQuestions": 3, "category": "Natureza"})}
                title="Natureza"
                icon_name="nature"
                description="Animais, plantas, desastres naturais..."
            />

            <ImgButton
                onPress={() => navigation.navigate("LessonLesson", {"numQuestions": 3, "category": "Vestuario"})}
                title="Vestuário"
                icon_name="casaco"
                description="Roupas, calçados, acessórios..."
            />

        </View>
        </>
    )
}