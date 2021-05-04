import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { Button, Text, Input } from 'react-native-elements';

export default function PushUps(){
    let [counter, setCounter] = useState(0);
    let [repValue, setRepValue] = useState("");
    let [sets, setSets] = useState("");
    let [completed, setCompleted] = useState(0);
    let checkRep = () => {
      setCounter(counter + 1)
      let x = repValue
      if(counter == repValue){
        alert("Completed set! Start again!");
        setCounter(counter = 0);
        setCompleted(completed + 1);
        if(completed == sets - 1){
          alert("Completed your entire workout! Workout again!");
          setCompleted(completed = 0)
        }
      }
    }
    let handleUser= () => {
      alert("Your custom workout has been created!")

    }
    let resetWorkout = () => {
      setCounter(counter = 0 );
      setCompleted(completed = 0);

    }
  return (
    <View style={styles.texts}>
      <Text>
          Push Ups
      </Text>
         <Text>How many reps would you like to complete?</Text>
        <Input
          value={repValue}
          onChangeText={(str) => setRepValue(str)}
        ></Input>
        <Text>How many sets do you want to complete?</Text>
        <Input
          value={repValue.value2}
          onChangeText={(net) => setSets(net)}
        ></Input>
        <Text>Please submit the above form, so that we can personalize your current exercise workout!</Text>
        <Button title="Submit!" onPress={handleUser}>Submit form!</Button>

      
      <Text>Completed sets: {completed}</Text>
      <Text>{counter}</Text>
      <Button title="Reps" onPress={checkRep}></Button>
      <Button title="Reset" onPress={resetWorkout}></Button>
    </View>
    
  );
}
function Run(){
    let [timer, setTimer] = useState(0);
    const [isactive, setActive] = useState(false);


  return (
    <View>
      <Text style={{ border: 5, borderColor: "black", fontSize: 25 }}>
          Jumping Jacks
      </Text>
      <Text>{counter}</Text>
      <Button title="Start Timer" onPress={() => setCounter(counter + 1 )}></Button>
      <Button title="Reset" onPress={() => setCounter(counter = 0 )}></Button>
    </View>
    
  );
}
const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        fontSize: "2.5rem",
        marginVertical: "1em",
        textAlign: "center",
        display: "block",
    },
    texts: {
        fontSize: 30,
        marginVertical: "1em",
        textAlign: "center",
        padding: 10
    },
})