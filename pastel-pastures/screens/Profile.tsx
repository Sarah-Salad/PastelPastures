import * as React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../components/Themed";

export default function Profile() {
    return (
        <View style={styles.container}>
            <View></View>
            <Image source={{uri: '../assets/images/favicon.png'}} />
            <Text style={styles.title}>Profile</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
