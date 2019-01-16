import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Auth} from './routing'

export class App extends Component<Props> {
  render() {
    return(
        <Auth/>
    )
  }
}


const mapStateToProps = state => {
    return {

    }
};

export default connect(mapStateToProps)(App);