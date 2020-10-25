import { preventAutoHide } from 'expo-splash-screen';
import * as React from 'react';
import { StyleSheet , ScrollView } from 'react-native';
import { ListItem, Avatar, colors } from 'react-native-elements';
import {Icon} from 'react-native-elements';

const list = [
  {
    timeframe: 'Monday',
    completion: '75%',
    goal1: 'walk your dog',
    goal2: 'eat a cracker',
    goal3: 'sleep',
    goal4: 'shower'
  },
  {
    timeframe: 'Tuesday',
    completion: '75%',
    goal1: 'walk your dog',
    goal2: 'eat a cracker',
    goal3: 'sleep',
    goal4: 'shower'
  },
  {
    timeframe: 'Wednesday',
    completion: '50%',
    goal1: 'walk your dog',
    goal2: 'eat a cracker',
    goal3: 'sleep',
    goal4: 'shower',
  },
  {
    timeframe: 'Thursday',
    completion: '50%',
    goal1: 'walk your dog',
    goal2: 'eat a cracker',
    goal3: 'sleep',
    goal4: 'shower',
  },
  {
    timeframe: 'Friday',
    completion: '75%',
    goal1: 'walk your dog',
    goal2: 'eat a cracker',
    goal3: 'sleep',
    goal4: 'shower',
  },
  {
    timeframe: 'Saturday',
    completion: '100%',
    goal1: 'walk your dog',
    goal2: 'eat a cracker',
    goal3: 'sleep',
    goal4: 'shower',
  },
  {
    timeframe: 'Sunday',
    completion: '50%',
    goal1: 'walk your dog',
    goal2: 'eat a cracker',
    goal3: 'sleep',
    goal4: 'shower',
  }
]

export default function HistoryScreen() {

  
  return ( 

    <ScrollView>{
      list.map((l, i) => (
        <>
            <ListItem key={i} containerStyle = {styles.listItem} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>{l.timeframe}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Subtitle style={styles.subtext}>{l.completion}</ListItem.Subtitle>
            </ListItem>
        <ListItem key={i + list.length} containerStyle = {styles.listItem} bottomDivider>
          <ListItem.Content> 
            <ListItem.Title key = {l.goal1} style={styles.goaltext}><Icon name='check-circle-o' type='font-awesome'/> {l.goal1}</ListItem.Title>
            <ListItem.Title key = {l.goal2} style={styles.goaltext}><Icon name='times-circle-o' type='font-awesome'/> {l.goal2}</ListItem.Title>
            <ListItem.Title key = {l.goal3} style={styles.goaltext}><Icon name='check-circle-o' type='font-awesome'/> {l.goal3}</ListItem.Title>
            <ListItem.Title key = {l.goal4} style={styles.goaltext}><Icon name='times-circle-o' type='font-awesome'/> {l.goal4}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        </>
        ))
      }</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start'
  },
  title: {
    fontSize: 20,
    color: 'white'
  },
  goaltext: {
    fontSize: 16,
    color: 'white',
  },
  subtext: {
    alignItems: "flex-end",
    fontSize: 16,
    color: '#c4c4c4'
  },
  listItem:{
    color: '#3d3d3d',
    backgroundColor:"#3d3d3d"
  },
  separator: {
    marginVertical: 3,
    height: 1,
    width: '80%',
  },
});
