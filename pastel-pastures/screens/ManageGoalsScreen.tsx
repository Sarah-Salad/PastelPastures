import * as React from "react";
import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Header } from "react-native-elements";
import { ListItem, Avatar } from "react-native-elements";
import { AsyncStorage } from "react-native";
import Storage from "../storage/Storage";
import { Alert } from "react-native";

var goalsArray: Array<any>;
AsyncStorage.clear();
(async() =>{
  console.log("started async");
  try{
    await AsyncStorage.setItem('goals', JSON.stringify([
      {
          name: 'Take a walk', 
          bp: 10, 
          completed: false,
          iconName: "odnoklassniki",
          iconColor: "#aad9fa",
          iconType: "font-awesome"
      },
      {
          name: 'Take a shower', 
          bp: 5, 
          completed: false,
          iconName: "odnoklassniki",
          iconColor: "#aad9fa",
          iconType: "font-awesome"
        },
      {
          name: 'Do an exercise routine', 
          bp: 15, 
          completed: false,
          iconName: "odnoklassniki",
          iconColor: "#aad9fa",
          iconType: "font-awesome"
        },
      {
          name: 'Read for an hour', 
          bp: 10, 
          completed: false,
          iconName: "odnoklassniki",
          iconColor: "#aad9fa",
          iconType: "font-awesome"
    }
    ]))
    var goalsArrayString = await AsyncStorage.getItem('goals');
    if (goalsArrayString !== null){
      console.log(goalsArrayString);
      goalsArray = JSON.parse(goalsArrayString);
    }}catch(error){
      console.log(error);
    }
})();

function MatchingName(name:string) {
  return((element:any) => element.name === name);
}

function AddToUserGoals(name: string){
  var goalIndex = goalsArray.findIndex(MatchingName(name));
  var goal = goalsArray.splice(goalIndex);
  (async() =>{
    try{
      var userGoalsArrayString = await AsyncStorage.getItem('UserGoals');
      if(userGoalsArrayString !== null){
        var userGoalsArray = JSON.parse(userGoalsArrayString);
        userGoalsArray.push(goal);
        userGoalsArrayString = JSON.stringify(userGoalsArray);
        await AsyncStorage.setItem('UserGoals', userGoalsArrayString);
        const newArray = await AsyncStorage.getItem('userGoals');
        console.log(newArray);
      }
    } catch(error){
      console.log(error)
    }
  })().then();
}

export default function ManageGoalsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header containerStyle={styles.header}
        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: (() => {
          navigation.navigate('HomeScreen')
        })}}
        centerComponent={{ text: 'Add Goals', style: { color: '#fff' } }}
        ></Header>
        <View style = {styles.list}>{
        goalsArray.map((l, i) => (
          <ListItem key={i} bottomDivider containerStyle = {styles.listItem}>
          <ListItem.Content >
            <ListItem.Title style={{color: "white"}}>{l.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress = {() => {
            AddToUserGoals(l.name);
          }} style = {styles.rightIcon} iconProps = {{name:"add", size:21}}/>
          </ListItem>
        ))
      }
      </View>
      <View style = {styles.separator} lightColor = "#eee" darkColor = "rgba(255,255,255,0.1)"/>
      <Text style={styles.title}>Manage Goals</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/ManageGoalsScene.js" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        //alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: 'serif'
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    list: {
        backgroundColor: "black",
    },
    rightIcon: {
        alignSelf: "flex-end",
    },
    header: {
        color: "black",
        backgroundColor: "#609433",
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
