import * as React from "react";
import { useState } from "react";
import {
    StyleSheet,
    FlatList,
    Button,
    SafeAreaView,
    Alert,
} from "react-native";
import { Overlay, ListItem, Icon, Header } from "react-native-elements";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { GoalItem } from "../GoalItem";
import { Goal, ToggleGoal } from "../types";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { coolDownAsync } from "expo-web-browser";

// Example data
const goalList = [
    {
        title: "Do an Exercise Routine",
        completed: false,
        bp: 15,
        icon: <Icon name="heartbeat" type="font-awesome" color="#f60" />,
    },
    {
        title: "Meditate for 10 minutes",
        completed: true,
        bp: 10,
        icon: <Icon name="odnoklassniki" type="font-awesome" color="#aad9fa" />,
    },
    {
        title: "Get enough sleep",
        completed: false,
        bp: 10,
        icon: <Icon name="moon-o" type="font-awesome" color="#8e80ff" />,
    },
];

// Returns the sum of Bloom Points from goalList
function getTotalBP() {
    let totalBP = 0;
    for (let i = 0; i < goalList.length; i++) {
        if (goalList[i].completed) {
            totalBP += goalList[i].bp;
        }
    }

    return totalBP;
}

// The main function of the file, returns the Home screen
export default function HomeScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Header
                containerStyle={styles.header}
                centerComponent={{
                    text: "Time to Bloom",
                    style: {
                        color: "#fff",
                        fontSize: 25,
                        fontFamily: "roboto",
                    },
                }}
            ></Header>
            <Text style={styles.title}>{getTotalBP()} BP</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />

            <View style={styles.list}>
                {/* Maps the list into list items */}
                {goalList.map((l, i) => (
                    <ListItem
                        key={i}
                        bottomDivider
                        containerStyle={
                            l.completed
                                ? { backgroundColor: "#609433" }
                                : { backgroundColor: "#000" }
                        }
                        onPress={() => {
                            Alert.alert(
                                "I'm proud of you",
                                !l.completed
                                    ? "Great job! You just earned " +
                                          l.bp +
                                          " Bloom Points"
                                    : "You're doing a great job"
                            );
                            l.completed = !l.completed;
                        }}
                    >
                        {l.icon}
                        <ListItem.Content>
                            <ListItem.Title
                                style={{
                                    color: "white",
                                    fontFamily: "roboto",
                                }}
                            >
                                {l.title}
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron
                            style={styles.rightIcon}
                            iconProps={
                                l.completed
                                    ? { name: "ios-checkmark", size: 21 }
                                    : { name: "ios-close", size: 21 }
                            }
                        />
                    </ListItem>
                ))}
            </View>
            <View style={styles.list}>
                <ListItem
                    containerStyle={styles.listItem}
                    onPress={() => {
                        navigation.navigate("ManageGoalsScreen");
                    }}
                >
                    {<Icon name="plus" type="font-awesome" color="#3b7a31" />}
                    <ListItem.Content>
                        <ListItem.Title
                            style={{
                                color: "#fff",
                                fontFamily: "roboto",
                            }}
                        >
                            {"Add a New Goal"}
                        </ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        </View>
    );
}
// Used to style the Home screen
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "roboto",
        padding: 15,
    },
    separator: {
        marginVertical: 0,
        height: 2,
        width: "100%",
    },
    centerComponent: {
        fontSize: 20,
    },
    list: {
        backgroundColor: "#609433",
    },
    rightIcon: {
        alignSelf: "flex-end",
    },
    header: {
        color: "#033500",
        backgroundColor: "#609433",
        fontSize: 20,
    },
    listTitle1: {
        padding: 13,
        fontSize: 12,
        alignSelf: "center",
    },
    listItem: {
        backgroundColor: "#000",
    },
});
