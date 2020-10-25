import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, FlatList, Button, SafeAreaView, Alert } from 'react-native';
import {Overlay, ListItem, Icon, Header} from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import  {GoalItem} from '../GoalItem'
import { Goal, ToggleGoal } from '../types';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const goalList = [
  {
    title: 'Do an Exercise Routine',
    completed: false,
    icon: <Icon name='heartbeat'
    type='font-awesome'
    color='#f60'/>
  },
  {
    title: 'Meditate for 10 minutes',
    completed: true,
    icon: <Icon name='odnoklassniki'
    type='font-awesome'
    color='#aad9fa'/>
  },
  {
    title: 'Get enough sleep',
    completed: false,
    icon: <Icon name='moon-o'
    type='font-awesome'
    color='#8e80ff'/>
  },
]

export default function HomeScreen({navigation}: any) {

  return (
    <View style={styles.container}>
      <Header containerStyle={styles.header}
        centerComponent={{text:"Time to Bloom", style: { color: '#fff', fontSize: 25}}}
        ></Header>
  
    <View style = {styles.list}>{
      goalList.map((l,i) => (
        <ListItem key={i} bottomDivider containerStyle = {l.completed ? {backgroundColor: "#033500"} : {backgroundColor:"#3d3d3d"}}>
          <ListItem.Content >
          <ListItem.Title style={{color: "white"}}>{l.title}</ListItem.Title>
          <ListItem.Subtitle>{l.icon}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron onPress = {() => {
            alert('Great job!');
            l.completed = !l.completed;
          }} style = {styles.rightIcon} iconProps = {l.completed ? {name:"check", size:21} : {name:"remove", size:21}}/>
          </ListItem>
        ))
 }
    </View>
    <View style = {styles.list}>
      <ListItem containerStyle = {styles.listItem} onPress = {() => {
        navigation.navigate('ManageGoalsScreen')
      }} >
        <ListItem.Content>

  
        <ListItem.Title style = {{color: "#fff"}}>
          {"Add a New Goal"}

        </ListItem.Title>
        <ListItem.Subtitle>
        {
            <Icon
            name='plus'
            type='font-awesome'
            color='#3b7a31'
            />
          }
        </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
  

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8e80ff"
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
  centerComponent:{
    fontSize: 20,
  },
  list:{
    backgroundColor: "#033500",
  },
  rightIcon:{
    alignSelf: "flex-end",
  },
  header:{
    color:"#033500",
    backgroundColor: "#033500",
    fontSize: 20
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

  
