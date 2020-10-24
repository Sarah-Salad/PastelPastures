import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import  {GoalItem} from '../GoalItem'
import { Goal } from '../types';

const goals: Array<Goal> = [{text: "Exercise", completed: true},{text: "Take a shower", completed: false}]


export default function HomeScreen() {

    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <React.Fragment>
      <Text><GoalItem goal = {goals[0]}/></Text>
      <Text><GoalItem goal = {goals[1]}/></Text>
      </React.Fragment>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/HomeScreen.js" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
