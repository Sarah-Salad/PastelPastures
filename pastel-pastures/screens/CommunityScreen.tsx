import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function CommunityScreen() {
  const list = [
    {
      name: 'Amy Farha',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      score: 1400
    },
    {
      name: 'Chris Jackson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      score: 900
    },
    {
      name: 'Guinevere Adams',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      score: 310
    },
    {
      name: 'Sally Walters',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      score: 140
    },
    {
      name: 'Alex Ferguson',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      score: 60
    },
    {
      name: 'Jamie Scott',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      score: 20
    }
  ]


  return (
    <ScrollView style={ { backgroundColor: '#3d3d3d'} }>{
      list.map((l, i) => (
        <ListItem key={i} bottomDivider containerStyle= { { backgroundColor: '#3d3d3d'} }>
          <Avatar rounded source={{uri: l.avatar_url}}/>
          <ListItem.Content>
            <ListItem.Title style= { {color: '#d9d9d9', fontFamily: 'serif'} }>{l.name}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Subtitle style= {styles.scoretext}>{l.score + " BP"}</ListItem.Subtitle>
        </ListItem>
      ))
    }</ScrollView>
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
    color: '#d9d9d9'
  },
  scoretext: {
    alignContent: 'flex-end',
    color: '#c4c4c4',
    fontFamily: 'serif'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
