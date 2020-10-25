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
            <ListItem key={i} bottomDivider>
              <ListItem.Content>
                <ListItem.Title style={styles.title}>{l.timeframe}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Subtitle style={styles.subtext}>{l.completion}</ListItem.Subtitle>
            </ListItem>
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem style={styles.goaltext}><Icon name='check-circle-o' type='font-awesome'/>{l.goal1}</ListItem>
            <ListItem style={styles.goaltext}><Icon name='times-circle-o' type='font-awesome'/>{l.goal2}</ListItem>
            <ListItem style={styles.goaltext}><Icon name='check-circle-o' type='font-awesome'/>{l.goal3}</ListItem>
            <ListItem style={styles.goaltext}><Icon name='times-circle-o' type='font-awesome'/>{l.goal4}</ListItem>
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
    fontWeight: 'bold',
  },
  goaltext: {
    alignItems: "flex-start",
    fontSize: 16,
    color: '#3d3d3d'
  },
  subtext: {
    alignItems: "flex-end",
    fontSize: 16,
    color: '#3d3d3d'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
