import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Header } from 'react-native-elements';
import { ListItem, Avatar} from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import Storage from '../storage/Storage';

var goalsArray: Array<any>;
AsyncStorage.clear();
(async() =>{
  console.log("started async");
  try{
    await AsyncStorage.setItem('goals', JSON.stringify([
      {name: 'Take a walk', BP: 10, completed: false},
      {name: 'Take a shower', BP: 5, completed: false},
      {name: 'Do an exercise routine', BP: 15, completed: false},
      {name: 'Read for an hour', BP: 10, completed: false}
    ]))
    var goalsArrayString = await AsyncStorage.getItem('goals');
    if (goalsArrayString !== null){
      console.log(goalsArrayString);
      goalsArray = JSON.parse(goalsArrayString);
    }
  } catch(error){
    console.log(error)
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
  })();
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
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  list:{
    backgroundColor: "black",
  },
  rightIcon:{
    alignSelf: "flex-end",
  },
  header:{
    color:"black",
    backgroundColor:"#033500"
  },
  listTitle1:{
    padding: 13,
    fontSize: 12,
    alignSelf: "center"
  },
  listItem:{
    backgroundColor:"#3d3d3d",
  }
});
