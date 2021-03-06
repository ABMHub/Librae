import React from "react"
import styles from "./translatePage.styles"
import { GifButton } from "../../Components/Buttons/buttons"
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export function RenderQuestion(question="Bom Dia", alternatives=["Homer", "Homer", "Homer", "Homer"], navigation) {
    return (
        <>
        <Text style={styles.QuestionStyle}> {question} </Text>

        <View style={styles.button_grid}>
            <GifButton
                onPress={() => navigation.navigate("Home")}
                icon_name={alternatives[0]}
            />

            <GifButton
                onPress={() => navigation.navigate("Home")}
                icon_name={alternatives[1]}
            />

            <GifButton
                onPress={() => navigation.navigate("Home")}
                icon_name={alternatives[2]}
            />

            <GifButton
                onPress={() => navigation.navigate("Home")}
                icon_name={alternatives[3]}
            />
        </View>
        </>
    )
}