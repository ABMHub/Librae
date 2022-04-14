import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 22
    },
    content: {
        flexDirection: 'column',
        paddingTop: 20,
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
        alignContent: "center"
    },
    contentAnswer: {
        paddingLeft: 30,
    }
});

export default styles
