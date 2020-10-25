import * as React from 'react';
import {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { ThemeProvider } from '@react-navigation/native';

AsyncStorage.clear();

class Storage extends Component{
    state = {
        'name': '',
        'BP': null,
        'Goals': [],
    }

    componentDidMount = () => {
        AsyncStorage.getItem('name').then((val) => {
            if (val != ''){
                this.setState({'name':val})
            }
            else{
                this.setName("Thomas Felton")
            }
        })
        AsyncStorage.getItem('BP').then((val) =>{
            if(val != null){
                this.setState({'BP':val});
            }
            else{
                this.setBP(0);
            }
        })
        AsyncStorage.getItem('Goals').then((val) => {
            if(val == null || val.length == 0){
                this.addGoal({'name':"Appointments", 'completed':false, 'BP': 10, 'added': false});
                this.addGoal({'name':"Trips", 'completed':false, 'BP': 10, 'added': false});
            }
            else{
                this.setState({'Goals': val})
            }
        })
    }

    setName(name: string){
        try{
            //await AsyncStorage.setItem('name', name);
        }catch(error){

        }
        this.setState({'name': name});
    }

    setBP(BP: any){
        AsyncStorage.setItem('BP', BP)
        this.setState({'BP': BP})
    }

    addGoal(goal: any){
        AsyncStorage.getItem('Goals').then((goals) => {
            const goalsArray = goals ? JSON.parse(goals): [];
            goalsArray.push(goal)
            AsyncStorage.setItem('Goals', JSON.stringify(goalsArray))
            this.setState('Goals', goalsArray)
        }
        );
    }
}
export default Storage