import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Header } from 'react-native-elements';
import { ListItem, Avatar} from 'react-native-elements';
import { AsyncStorage } from 'react-native';


const list = [
  {
    name:'Take a walk',
  },
  {
    name:"Take a Shower",
  },
  {
    name:"Do an Exercise routine",
  },
  {
    name:"Read for an hour",
  }

]

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
        list.map((l, i) => (
          <ListItem key={i} bottomDivider containerStyle = {styles.listItem}>
          <ListItem.Content >
            <ListItem.Title style={{color: "white"}}>{l.name}</ListItem.Title>
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

const StoreData = async () => {
  try {
    await AsyncStorage.setItem(
      '@Name:key',
      'Save it.'
    );
  } catch (error) {
    // Error saving data
  }
};

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
