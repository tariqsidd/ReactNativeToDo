import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import { connect } from 'react-redux'
import ToDoStyle from "./ToDoStyle";
import { deleteTodo, updateStatus } from '../../actions/todos'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class ToDo extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    Delete(index) {
        this.props.deleteTodo(index);
    }

    onSwipeRight(index) {
        this.props.updateStatus(index);
    }

    _renderItem = ({item, index}) => {
        const config = {velocityThreshold: 0.3, directionalOffsetThreshold: 80};
        let taskIsDone = item.status ? 'line-through' : 'none';

        return(
            <GestureRecognizer
                onSwipeLeft={() => Alert.alert(
                    'Alert Title',
                    'alertMessage',
                    [
                        {text: 'Cancel'},
                        {text: 'Delete', onPress: () => {this.Delete(this, index)}},

                    ],
                    { cancelable: false }
                )}
                onSwipeRight={() => this.onSwipeRight(index)}
                config={config}
            >
                <View style={ToDoStyle.todoList}>
                    <View style={ToDoStyle.tag}/>
                    <View>
                        <Text style={[ToDoStyle.todoTitle,{textDecorationLine: taskIsDone}]}>
                            {item.title}
                        </Text>
                        <Text>
                            Due Date
                        </Text>
                    </View>
                </View>
            </GestureRecognizer>
        )
    }



    render() {
        let todos = this.props.todos.todos;

        return (
            <View style={ToDoStyle.mainCont}>
                <FlatList
                    data={todos}
                    extraData={this.props}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
};

const mapDispatchToProps = {
    deleteTodo,
    updateStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);


