import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 25
    },
    content: {
        flexDirection: 'column',
        paddingTop: 35,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center"
    },
    gifImg: {
        width: 205,
        height: 195,
        borderRadius: 20
    },
    contentQuestion: {
        paddingTop: 50,
        alignContent: "center"
    },
    contentAnswer: {
        paddingTop: 30,
        paddingLeft: 30,
    }
});

export default styles
