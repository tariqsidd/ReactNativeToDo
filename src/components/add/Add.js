import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import AddStyle from "./AddStyle";
import { addTodo } from "../../actions/todos";

class Add extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: ''
        }
    }

    addTodo() {
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    render() {
        return (
            <View style={AddStyle.mainCont}>
                <View>
                    <TextInput placeholder="What do you need to do"
                               placeholderTextColor="#e5e5e5"
                               underlineColorAndroid='transparent'
                               style={AddStyle.input}
                               autoCorrect={false}
                               autoCapitalize={'none'}
                               maxLength = {40}
                               multiline={true}
                               numberOfLines={5}
                               textAlignVertical = {'top'}
                               value={this.state.title}
                               onChangeText={(title) => this.setState({ title })}
                               returnKeyType='go'
                    />
                </View>
                <View style={AddStyle.timeInputCont}>

                </View>
                <TouchableOpacity onPress={() => this.addTodo()} style={AddStyle.btn}>
                    <Text style={AddStyle.btnText}>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = {
    addTodo
};

export default connect(null, mapDispatchToProps)(Add);


