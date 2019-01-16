import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux'
import LoginStyle from './LoginStyle'
import { setUsername } from "../../actions/users";

class Login extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    saveName(){
        let {username} = this.state;
        this.props.setUsername(username);
        this.props.navigation.navigate('MainTab');
    }

    render() {
        let {username} = this.state;

        return (
           <View style={LoginStyle.mainCont}>
              <View style={LoginStyle.LogoCont}>
                  <Image style={{width: 135, height: 140}} source={require('../../images/sh.png')}/>
                  <Text style={LoginStyle.LogoText}>
                      Tod
                      {'\n'}
                      {'  o'}
                  </Text>
              </View>
               <View style={LoginStyle.inputCont}>
                   <View style={LoginStyle.textInputCont}>
                       <TextInput placeholder="Name"
                                  placeholderTextColor="#e5e5e5"
                                  underlineColorAndroid='transparent'
                                  style={LoginStyle.input}
                                  autoCorrect={false}
                                  autoCapitalize={'none'}
                                  value={username}
                                  onChangeText={(username) => this.setState({ username })}
                                  returnKeyType='done'
                       />
                   </View>
                   <TouchableOpacity onPress={this.saveName.bind(this)} style={LoginStyle.btn}>
                       <Text style={LoginStyle.btnText}>Login</Text>
                   </TouchableOpacity>
               </View>
           </View>
        );
    }
}

const mapDispatchToProps = {
    setUsername
};

export default connect(null, mapDispatchToProps)(Login);