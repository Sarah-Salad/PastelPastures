import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Header } from 'react-native-elements';
import { ListItem, Avatar} from 'react-native-elements';


const list = [
  {
    name:'Take a walk',
    subtitle:"15XP"
  },
  {
    name:"Take a Shower",
    subtitle:"5XP"
  },
  {
    name:"Do an Exercise routine",
    subtitle:"10XP"
  },
  {
    name:"Read for an hour",
    subtitle: "10XP"
  }

]

export default function ManageGoalsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header containerStyle={styles.header}
        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: (() => {
          navigation.navigate('HomeScreen')
        })}}
        centerComponent={{ text: 'Manage Goals', style: { color: '#fff' } }}
        ></Header>
        <View style = {styles.list}>{
        list.map((l, i) => (
          <ListItem key={i} bottomDivider containerStyle = {styles.listItem}>
          <ListItem.Content >
            <ListItem.Title style={{color: "white"}}>{l.name}</ListItem.Title>
          <ListItem.Subtitle style={{color: "#c4c4c4"}}>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron onPress = {() => {
          
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
