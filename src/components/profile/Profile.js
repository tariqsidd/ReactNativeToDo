import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import LoginStyle from "../login/LoginStyle";
import ProfileStyle from "./ProfileStyle";

class Profile extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
        }
    }

    onChange (name, val) {
        this.setState({ [name] : val });
    }

    render() {
        let {username} = this.state;
        return (
            <View style={{backgroundColor:'#fff', flex:1, justifyContent: 'flex-end'}}>
                <TouchableOpacity onPress={()=>{}} style={ProfileStyle.btn}>
                    <Text style={ProfileStyle.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {

    }
};

export default connect(mapStateToProps)(Profile);


