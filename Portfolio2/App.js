
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import { Button, Input } from 'react-native-elements';
import TodoApp from './components/Todo';
import LoginApp from './components/LoginApp';
import Run from './components/run'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import JJacks from './components/exercises';
import PushUps from './components/PushUps';




const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="JumpingJacks" component={JumpingJacks} />
        <Stack.Screen name="Run" component={Running} />
        <Stack.Screen name="Push-Ups" component={Push} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
function Home({ navigation }){

  return (
    <View>
      <Text>Welcome, to your Fitness and Daily Health Manager App! Login to view your To Do List, or proceed to Workout w/out logging in! </Text>
      
      <Button
        title="Start Workout"
        onPress={() => navigation.navigate('Workout')}
      />
      <LoginApp>
      </LoginApp>
      
    </View>
    
  );
}
function List(){
  return (
    <View>
      <TodoApp></TodoApp>
      
    </View>
    
  );
}
function Workout({ navigation }){
  return (
    <View>
      <Text>Exercise List:</Text>
      <Button title="Jumping Jacks" onPress={() => navigation.navigate('JumpingJacks')}></Button>
      <Button title="Run" onPress={() => navigation.navigate('Run')}></Button>
      <Button title="Push Ups" onPress={() => navigation.navigate('Push-Ups')}></Button>
      
    </View>
    
  );
}
function JumpingJacks(){
  return (
    <View>
      <JJacks></JJacks>
      
      
    </View>
    
  );
}
function Running(){
  return (
    <View>
      <Run></Run>
      
      
    </View>
    
  );
}
function Push(){
  return (
    <View>
      <PushUps></PushUps>
      
      
    </View>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texts: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  }
});
