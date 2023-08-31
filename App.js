import {useState} from "react";
import { StyleSheet,
    View,
    Platform,
    SafeAreaView,
    FlatList,
    Button
} from 'react-native';
import {StatusBar} from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

    const [goals, setGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function addGoalHandler(goalText){
        setGoals(currentGoals => [...currentGoals, {text: goalText, id: Math.random().toString()}]);
        endAddGoalHandler();
    };

    function deleteGoalHandler(id){
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== id);
        });
    }

    //opens modal
    function startAddGoalHandler()
    {
        setModalIsVisible(true);
    }

    //closes modal
    function endAddGoalHandler()
    {
        setModalIsVisible(false);
    }

    return (
        <>
            <StatusBar style="light"/>
            <SafeAreaView style={styles.appContainer}>
                <Button title="Add New Goal" color="#a065ec" onPress={startAddGoalHandler}/>

                <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        renderItem = {(itemData) => {
                            return (
                                <GoalItem
                                    id={itemData.item.id}
                                    text={itemData.item.text}
                                    onDeleteItem={deleteGoalHandler}/>
                            );

                        }
                        }
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                    />
                </View>

            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,

        paddingTop: Platform.OS == 'android' ? 50 : 0,
        paddingHorizontal: 16,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    goalsContainer: {
        flex: 5,
    }
});
