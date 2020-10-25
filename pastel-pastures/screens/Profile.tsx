import * as React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Card, Icon } from "react-native-elements";
import { Text, View } from "../components/Themed";

const badges = [
    { name: "place", color: "#00aced" },
    { name: "star", color: "#517fa4" },
    { name: "album", color: "#f50" },
    { name: "games" },
];

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.avatar}
                    source={require("../assets/images/profile.png")}
                />
                <Text style={styles.name}>Thomas Felton</Text>
                <View style={styles.locationContainer}>
                    <Icon
                        name="place"
                        underlayColor="transparent"
                        iconStyle={styles.placeIcon}
                    />

                    <View style={styles.locationRow}>
                        <Text style={styles.location}>Springfield, MO</Text>
                    </View>
                </View>
            </View>

            <View>
                <Card>
                    <Card.Title>Badges</Card.Title>
                    <Card.Divider />
                    <View style={styles.badges}>
                        {badges.map((b, i) => {
                            return (
                                <View
                                    key={i}
                                    style={{ backgroundColor: "transparent" }}
                                >
                                    <Icon
                                        name={b.name}
                                        color={b.color}
                                        reverse
                                        underlayColor="transparent"
                                    />
                                </View>
                            );
                        })}
                    </View>
                </Card>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    badges: {
        flexDirection: "row",
        backgroundColor: "white",
    },
    placeIcon: {
        color: "white",
        fontSize: 26,
    },
    locationContainer: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "transparent",
    },
    locationRow: {
        backgroundColor: "transparent",
    },
    location: {
        color: "#A5A5A5",
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
    },
    header: {
        backgroundColor: "#033500",
        height: 300,
        alignItems: "center",
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "white",
        marginBottom: 20,
        marginTop: 50,
        alignSelf: "center",
    },
    container: {
        flex: 1,
    },
    name: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 8,
        textAlign: "center",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
