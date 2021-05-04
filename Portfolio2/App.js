
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, FlatList, View} from 'react-native';
import { Button, Input } from 'react-native-elements';
import TodoApp from './components/Todo';
import LoginApp from './components/LoginApp';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import JJacks from './components/exercises';
import PushUps from './components/PushUps';
import Squats from './components/Squats';




const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Workout" component={Workout} />
        <Stack.Screen name="JumpingJacks" component={JumpingJacks} />
        <Stack.Screen name="Push-Ups" component={Push} />
        <Stack.Screen name="Squats" component={Squat} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
function Home({ navigation }){

  return (
    <SafeAreaView>
        <View>
          <Text style={styles.textnew}>Welcome, to your Fitness and Daily Health Manager App! Login to view your To Do List, or proceed to Workout w/out logging in! </Text>
      
          <Button title="Start Workout" onPress={() => navigation.navigate('Workout')}/>
          <LoginApp></LoginApp>
      
        </View>
    </SafeAreaView>
    
    
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
  let [buttonclick, setButtonClick] = useState("")

  let Jacks = () => {
    navigation.navigate('JumpingJacks')
    setButtonClick("Jumping Jacks")
  }
  let [pushes, setPushes] = useState("")

  let ups = () => {
    navigation.navigate('Push-Ups')
    setPushes("Push-Ups")
  }
  let [squatting, setSquatting] = useState("")

  let sqs = () => {
    navigation.navigate('Squats')
    setSquatting("Squats")
  }
   let handleList = () => {
     setSquatting("")
     setButtonClick("")
     setPushes("")
   }
  return (
    <View>
      <Text style={styles.text}>Exercise List:</Text>
      <Button title="Jumping Jacks" onPress={Jacks}></Button>
    
      <Button title="Push Ups" onPress={ups}></Button>
      <Button title="Squats" onPress={sqs}></Button>

      <View>
        <Text style={styles.textnew1}>Completed exercises:</Text>
        <Text style={styles.textnew}>{buttonclick}</Text>
        <Text style={styles.textnew}>{pushes}</Text>
        <Text style={styles.textnew}>{squatting}</Text>
        <Button onPress={handleList} title="Reset Completed List!"></Button>
      </View>
    
      


      
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

function Push(){
  return (
    <View>
      <PushUps></PushUps>
      
      
    </View>
    
  );
}
function Squat(){
  return (
    <View>
      <Squats></Squats>
      
      
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
  },
  text: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    marginVertical: "1em",
    textAlign: "center",
    display: "block",
},
textnew: {
  fontWeight: "bold",
  fontSize: "1.25 rem",
  marginVertical: "1em",
  textAlign: "center",
  display: "block",
},
textnew1: {
  fontWeight: "bold",
  fontSize: "1.75 rem",
  marginVertical: "1em",
  textAlign: "center",
  display: "block",
},
});
