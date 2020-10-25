import * as React from 'react';
import {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

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
                this.setState({'name':'Thomas Felton'})
            }
        })
        AsyncStorage.getItem('BP').then((val) =>{
            if(val != null){
                this.setState({'BP':val});
            }
            else{
                this.setState({'BP': 0});
            }
        })
        AsyncStorage.getItem('Goals').then((val) => {
            if(val == null || val.length == 0){
                this.addGoal({name:""})
            }
        })
    }

    setName(name: string){
        AsyncStorage.setItem('name', name);
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
        }
        );
    }
}