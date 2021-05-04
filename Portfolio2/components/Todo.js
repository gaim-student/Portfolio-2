
import { Text, View } from 'react-native';
import { Button, CheckBox, Input} from 'react-native-elements';
import React, { Component } from 'react';

const styles = {
    textAlign: "center",
    padding: 10,
}
let todoList = [
    {
        key: 1,
        completed: true,
        description: "Eat Breakfast",
    },
    {
        key: 2,
        completed: true,
        description: "Exercise",
    },
    {
        key: 3,
        completed: true,
        description: "Eat Lunch",
    },
    {
        key: 4,
        completed: true,
        description: "Eat Dinner",
    },
]
export default class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { todoList, curId: 5, inputValue: "", filtered: false, startDate: new Date() };
        this.handleDate = this.handleDate.bind(this);
    }
    handleDate(date) {
        this.setState({
            start: date
        })
    }

    completeItem = (itemId) => {
        this.setState((prevState) => {
            let prevList = prevState.todoList
            let itemIndex = prevList.findIndex((item) => item.key == itemId)
            prevList[itemIndex].completed = !prevList[itemIndex].completed
            return { todoList: prevList }
        })
    }
    handleKeyPress = (event, itemId) => {
        console.log("Pressed")
        console.log(event.key)
        if (event.key == "Enter") {
            this.addTodoItem()
        }
    }
    addTodoItem = () => {
        let prevValue = this.state.inputValue
        this.setState(prevState => ({
            todoList: [...prevState.todoList,
            { completed: false, description: prevValue, key: this.state.curId }],
            curId: prevState.curId + 1,
            inputValue: ""
        }))
    }
    render() {
        let todoList = this.state.todoList
        if (this.state.filtered) {
            todoList = todoList.filter(item => !item.completed)
        }

        todoList = todoList.map((item) => (
            <View style={styles} key={item.key}>
                <span>{item.key}</span>
                <Text>

                    <CheckBox
                     title={item.description}
                     onKeyPress={(event) => this.handleKeyPress(event)} 
                     onPress={() => this.completeItem(item.key)} 
                     checked={item.completed}
                    textStyle={item.completed ? { textDecorationLine: "line-through", textDecorationStyle: "solid" } : undefined}
                     ></CheckBox>
                    </Text>
            </View>
        ))
        return (
            <>
                <Text style={styles}>Today's Tasks:</Text>
                <Text style={styles}>
                    <CheckBox 
                        title="Filter completed items"
                    onPress={(prev) => this.setState({ filtered: !this.state.filtered })} 
                    checked={this.state.filtered}></CheckBox>
            
         </Text>
                {todoList}

                <Input onChangeText={(text) => this.setState({ inputValue: text })} value={this.state.inputValue} onKeyPress={(event) => this.handleKeyPress(event)}></Input>
                <Button onPress={this.addTodoItem} title="Add New Item"></Button>
            </>
        )
    }
}