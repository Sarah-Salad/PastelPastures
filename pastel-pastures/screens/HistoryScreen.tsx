import { preventAutoHide } from 'expo-splash-screen';
import * as React from 'react';
import { StyleSheet , ScrollView } from 'react-native';
import { ListItem, Avatar, colors } from 'react-native-elements';
import {Icon} from 'react-native-elements';
import { Text, View } from '../components/Themed';

const list = [
  {
    timeframe: 'Monday',
    completion: '75%',
    goal1: 'Walk your dog',
    goal2: 'Eat a cracker',
    goal3: 'Sleep',
    goal4: 'Shower'
  },
  {
    timeframe: 'Tuesday',
    completion: '75%',
    goal1: 'Walk your dog',
    goal2: 'Eat a cracker',
    goal3: 'Sleep',
    goal4: 'Shower'
  },
  {
    timeframe: 'Wednesday',
    completion: '50%',
    goal1: 'Walk your dog',
    goal2: 'Eat a cracker',
    goal3: 'Sleep',
    goal4: 'Shower',
  },
  {
    timeframe: 'Thursday',
    completion: '50%',
    goal1: 'Walk your dog',
    goal2: 'Eat a cracker',
    goal3: 'Sleep',
    goal4: 'Shower',
  },
  {
    timeframe: 'Friday',
    completion: '75%',
    goal1: 'Walk your dog',
    goal2: 'Eat a cracker',
    goal3: 'Sleep',
    goal4: 'Shower',
  },
  {
    timeframe: 'Saturday',
    completion: '100%',
    goal1: 'Walk your dog',
    goal2: 'Eat a cracker',
    goal3: 'Sleep',
    goal4: 'Shower',
  },
  {
    timeframe: 'Sunday',
    completion: '50%',
    goal1: 'Walk your dog',
    goal2: 'Eat a cracker',
    goal3: 'Sleep',
    goal4: 'Shower',
  }
]

export default function HistoryScreen() {

  
  return ( 

    <ScrollView>{
      list.map((l, i) => (
        <>
            <ListItem key={i} containerStyle = {styles.listItem} topDivider bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>{l.timeframe}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Subtitle style={styles.subtext}>{l.completion}</ListItem.Subtitle>
            </ListItem>
        <View style={ {backgroundColor: '#3d3d3d'} }> 
          <View style={styles.correct}>
            <Text style={styles.goaltext}> <Icon name='check-circle-o' type='font-awesome' color = '#fff'/>    {l.goal1} </Text> 
          </View>
          <View style={styles.incorrect}>
            <Text style={styles.goaltext}> <Icon name='times-circle-o' type='font-awesome' color = '#fff'/>    {l.goal2} </Text> 
          </View>
          <View style={styles.correct}>
            <Text style={styles.goaltext}> <Icon name='check-circle-o' type='font-awesome' color = '#fff'/>    {l.goal3} </Text> 
          </View>
          <View style={styles.incorrect}>
            <Text style={styles.goaltext}> <Icon name='times-circle-o' type='font-awesome' color = '#fff'/>    {l.goal4} </Text> 
          </View>
        </View>
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
  incorrect: {
    borderWidth: 1, 
    borderRadius: 10,
    borderColor: '#3d3d3d',
    padding: 10,
    backgroundColor: '#3d3d3d'
  },
  correct: {
    borderWidth: 1, 
    borderRadius: 10,
    borderColor: '#033500',
    padding: 10,
    backgroundColor: '#033500'
  },
  title: {
    fontSize: 22,
    color: 'white'
  },
  goaltext: {
    textAlignVertical: 'center',
    fontSize: 18,
    color: '#d9d9d9'
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
