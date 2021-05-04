import { useState } from "react";
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from "react-native";
import TodoApp from './Todo'


export default function LoginApp() {
    let [formNew, setformNew] = useState([
        {
            label: "Username:",
            regexp: /^$/,
            value: "",
            loggedIn: false,
            loggingIn: false,
            errorMessage: "The field is blank."
        },

    ])
    let [password, setPassword] = useState([
        {
            label2: "Password:",
            regexp: "Ch@rge!",
            value2: "",
            loggedIn2: false,
            errorMessage2: "Incorrect Password.",
            loggingIn2: "",
            log: false,
            login: false,
            appear: "none",
            message: "",
            todo: false
        },
    ])
    
    
    const styles = StyleSheet.create({
        errorMessage: {
            color: "red",
            textAlign: "center",
            fontSize: "25px",
            padding: 20,
        },
        userInput: {
            width: "95%",
            height: 50,
            borderColor: "black",
            borderWidth: "2px",
            margin: 12,
            padding: 15,
        },
        text: {
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
        texts: {
            fontSize: 25,
            marginVertical: "1em",
            textAlign: "center"
        },
    })
    let loggingIn = () => {
        setPassword({
            appear: "block",
        })
    }
    let handleLogOut = () => {
        setPassword({
            login: false
        })
        alert("You are now logged out!");
    }
    function handlePassword(){
        console.log(password.loggingIn2)
        let x = password.loggingIn2
        if (x == "Ch@rge!"){
            console.log("Correct Password")
            setPassword({
                log: true,
                login: true,
                todo: true
            })

        } else {
            setPassword({
                loggedIn2 : true
            })
        }

    }

        
    

    return (
        <View>
            {password.login ? (<View><Text>Welcome, {formNew.value}. You are logged in!</Text><Button onPress={handleLogOut} title="Log Out"></Button></View>) : undefined}
            {password.todo ? (<View><TodoApp></TodoApp></View>) : undefined}
            {!password.log ? (<View>
                <Text id="welcome" style={styles.text}>Hello, please log in...</Text>
                <View style={{ display: password.appear }}>


                    <Text style={styles.text}>Username:</Text>
                    <TextInput
                        value={formNew.value}
                        style={styles.userInput}
                        onChangeText={(val) => setformNew({ value: val })}
                        defaultValue={formNew.value}
                    ></TextInput>
                    <Text>You entered: {formNew.value}{formNew.errorMessage}</Text>

                    <Text style={styles.text}>Password:</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.userInput}
                        defaultValue={formNew.value2}
                        onChangeText={(pass) => setPassword({ loggingIn2: pass })}
                    ></TextInput>

                    <Text>{password.errorMessage2}</Text>
                    <Button onPress={handlePassword} title="Submit"></Button>
                    {password.loggedIn2 ? (<Text style={styles.errorMessage}>Incorrect Password! Try again...</Text>) : undefined}

                </View>
            </View>) : undefined}
            

        </View>


    )
}
