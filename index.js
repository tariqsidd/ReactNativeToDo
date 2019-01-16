/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import App from './src/components/App';
import {name as appName} from './app.json';

export default class Todo extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Todo);
