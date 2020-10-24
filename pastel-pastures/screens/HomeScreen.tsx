import * as React from 'react';
import {useState} from 'react';
import { StyleSheet, FlatList, Button, SafeAreaView, Alert } from 'react-native';
import {Overlay, ListItem, Icon, CheckBox} from 'react-native-elements';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import  {GoalItem} from '../GoalItem'
import { Goal, ToggleGoal } from '../types';
import {CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
const initialGoals: Array<Goal> = [{text: "Exercise", completed: true},{text: "Take a shower", completed: false}]
const goalList = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  
]

export default function HomeScreen() {
  const [goals, setGoals] = useState(initialGoals)

  const toggleGoal: ToggleGoal = selectedGoal  => {
    const newGoals = goals.map(goal =>{
      if(goal == selectedGoal) {
        return {
          ...goal,
          completed: !goal.completed
        }
      }
      return goal;
    });
    setGoals(newGoals);
  }

  const [toggleCheckBox, setToggleCheckBox]= useState(false);

  const Separator = () => (
    <View style = {styles.separator}/>
  );


  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };


  const percentage = 66;
  return (
    
    <SafeAreaView style={styles.container}>
 
      <View>
        <Text style={styles.title}>Take a moment for yourself...</Text>
        </View>
      <View>
        <CircularProgressbarWithChildren value={66}> 

       <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('hello')} />
          <div style={{ fontSize: 12, marginTop: -5 }}>
          </div>
       
        </CircularProgressbarWithChildren>
          {<Text>Exercise</Text>}
      </View>    
<View>
  {
    goalList.map((item, i) => (
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>
<View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
        {/* <Button
          title = "Exercise"
          onPress = {() => Alert.alert("Great job! Taking care of yourself is the first step to success.")}
        /> */}
        {/* <FlatList
        data={[
          {key: <GoalItem goal = {goals[0]}/>},
          {key: <GoalItem goal = {goals[1]}/>},
        ]}
        renderItem={({item}) => 
          <View style = {styles.container}>
          <CheckBox 
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text>{item.key}</Text>
          </View>

        }
      />     */}
{/* 
        <View>
        <Icon
          raised
          name='heartbeat'
          type='font-awesome'
          color='#f50'
          onPress={() => console.log('hello')} />
        </View> */}

        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/HomeScreen.js" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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


  
