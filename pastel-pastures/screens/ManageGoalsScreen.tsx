import * as React from 'react';
import { Alert, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Header } from 'react-native-elements';
import { ListItem, Avatar} from 'react-native-elements';
import { AsyncStorage } from 'react-native';
import Storage from '../storage/Storage';

<Storage />
console.log("pre async");
(async() =>{
  console.log("started async");
  try{
    const goalArray = await AsyncStorage.getItem('Goals');
    if (goalArray !== null){
      console.log(goalArray);
    }
  } catch(error){
    console.log("oops")
  }
})();
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
        centerComponent={{ text: 'Add Goals',style: { color: '#fff', fontSize: 25} }}
        ></Header>
        <View style = {styles.list}>{
        list.map((l, i) => (
          <ListItem key={i} bottomDivider containerStyle = {styles.listItem} onPress = {() => {
              Alert.alert("Goal Added", "Okay! We just added '" + l.name + "' to your goals. Taking care of yourself is the first step to improving your mindspace.");
          }}>
          <ListItem.Content >
            <ListItem.Title style={{color: "white"}}>{l.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron style = {styles.rightIcon} iconProps = {{name:"add", size:21}}/>
          </ListItem>
        ))
      }
      </View>
      <View style = {styles.separator} lightColor = "#eee" darkColor = "rgba(255,255,255,0.1)"/>
      <Text style={styles.title}>Manage Goals</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
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
