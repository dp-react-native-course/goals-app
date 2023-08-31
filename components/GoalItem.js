import {Text, View, StyleSheet, Pressable} from "react-native";

export default function GoalItem(props){

    return (
            <View style={styles.goalItem}>
                <Pressable
                    android_ripple={{color: "#2a0762"}}
                    onPress = {props.onDeleteItem.bind(this, props.id)}
                    style={({pressed}) => pressed && styles.pressedItem}
                >
                    <Text style={styles.goalItemText}>{props.text}</Text>
                </Pressable>
            </View>

    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem:{
        opacity: 0.5,
        backgroundColor: "#2a0762"
    },
    goalItemText: {
        color: "white",
        padding: 8,
    }
});