
import React, { useEffect, useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import TimerMachine from 'react-timer-machine'

export default function Run(){
    let [timer, setTimer] = useState(0);
    let [mintimer, setMinTimer] = useState(0);
    

    
    
  return (
    <View style={styles.texts}>
      <Text>
          Run
      </Text>
         <Text>Run Time: 00:{mintimer}:{timer}</Text>

      
      
      <Button onPress={handleTimer} title="Start Time"></Button>
      <Button title="Reset"></Button>
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