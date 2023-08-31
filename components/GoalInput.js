import {Button, TextInput, View, StyleSheet, Modal, Image} from "react-native";
import {useState} from "react";

export default function GoalInput(props) {
    const [goalText, setGoalText] = useState('');
    const logo = require('../assets/images/goals.png');
    function goalInputHandler(enteredText){
        setGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal(goalText);
        setGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={logo} style={styles.image}/>
                <TextInput
                    placeholder="Your course goal !"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={goalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
                    </View>
                    <View  style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0"/>
                    </View>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
    },
    image: {
      width: 150,
      height: 150,
      margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 6,
        backgroundColor: '#e4d0ff',
        width: "100%",
        padding: 16,
        color: "#120438",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 16
    },
    button: {
        width: 100,
        marginHorizontal: 8,

    }
});