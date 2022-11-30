import { Button, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import { useState } from "react";

export default function App() {
    const [enteredtext, setenteredtext] = useState("");
    const [goals, setgoals] = useState([]);


    function textchange(x) {
        setenteredtext(x);
    }

    function buttonpress() {
        console.log(enteredtext)
        setgoals([...goals, enteredtext])
    }

    return (
        <View style={styles.main_container}>
            <View style={styles.container1}>
                <Text style={styles.textstyle}>Enter Goals</Text>
                <TextInput
                    style={styles.textinpstyle}
                    placeholder="Type Here...."
                    onChangeText={textchange}
                ></TextInput>
            </View>
            <View style={styles.container2}>
                <Button title="Submit" onPress={buttonpress} />
            </View>
            <View style={styles.container3}>
                <Text>List of Goals</Text>
                <FlatList 
                    data={goals} 
                    renderItem={ itemdata => {
                        return(
                            <View>
                                <Text style={styles.goal}>{itemdata.item}</Text>
                            </View>
                )}} alwaysBounceVertical={false}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 30,
        margin: 25,
    },

    container1: {
        flexDirection: "row",
        backgroundColor: "#fff",
        alignItems: "center",
        paddingBottom: 10,
    },

    container2: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10,
    },

    container3: {
        backgroundColor: "#fff",
        paddingBottom: 10,
    },

    goal: {
        backgroundColor: "purple",
        padding: 5,
        marginBottom: 2,
        color: "white"
    },

    textstyle: {
        paddingRight: 10,
    },

    textinpstyle: {
        paddingRight: 10,
        paddingLeft: 10,
        borderWidth: 2,
        borderColor: "grey",
        width: 250,
    },
});
