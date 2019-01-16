import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList, TouchableOpacity  } from 'react-native';

export default class App extends Component {
    constructor(){
        super();
        this.state={
            todo:['get books', 'cook food', 'go to university']
        }
    }

    remove(index){
        console.warn('index',index)
        let todos = this.state.todo;
        todos.splice(index, 1);
        this.setState({todo: todos})
    }

    // for update fruits.splice(3, 1, "Lemon");

    _renderItem = ({item, index}) => {
        return(
            <TouchableOpacity onPress={this.remove.bind(this,index)}>
                <Text>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    };

    render() {
        let {todo} = this.state;
        console.warn('todo', todo)
        return (
            <View style={styles.container}>
                <Text>TODO</Text>
                <FlatList
                    data={todo}
                    renderItem={this._renderItem}
                    extraData={this.state}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
