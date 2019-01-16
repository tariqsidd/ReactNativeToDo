import React, {Component} from 'react';
import { StackNavigator , TabNavigator  } from 'react-navigation';
import { StyleSheet } from 'react-native';
import Login from "./login/Login";
import ToDo from "./toDo/ToDo";
import Add from "./add/Add";
import Profile from "./profile/Profile";
import Icon from 'react-native-vector-icons/Octicons';
import Header from "./header/Header";


const Main = TabNavigator({
    'ToDo': {
        screen: ToDo,
        navigationOptions: {
            header: ({navigation}) => {
                return <Header title="Todo" leftHandler={() => navigation.goBack(null)}/>
            },
            tabBarIcon: ({tintColor, focused}) => {
                return <Icon name={'checklist'} color={ tintColor } style={styles.icon}/>
            }
        }
    },
    'Add': {
        screen: Add,
        navigationOptions: {
            header: ({navigation}) => {
                return <Header title="Add" leftHandler={() => navigation.goBack(null)}/>
            },
            tabBarIcon: ({tintColor, focused}) => {
                return <Icon name={'plus'} color={ tintColor } style={styles.icon}/>
            }
        }
    },
    'Profile': {
        screen: Profile,
        navigationOptions: {
            header: ({navigation}) => {
                return <Header isProfile={true} title="Hello," leftHandler={() => navigation.goBack(null)}/>
            },
            tabBarIcon: ({tintColor, focused}) => {
                return <Icon name={'person'} color={ tintColor } style={styles.icon}/>
            }
        }
    }
},{
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    lazyLoad: true,
    animationEnabled: false,
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        indicatorStyle: {
            opacity: 0,
        },
        style: {
            backgroundColor: '#fff',
            paddingHorizontal: 50
            // elevation: 8,
            // shadowOpacity: 0,
        },

        activeTintColor: '#4cd964',
        inactiveTintColor:'#e5e5e5',
        pressColor: '#4cd964',

    }
});

export const Auth = StackNavigator ({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    MainTab: {
        screen: Main,
    }
});

const styles = StyleSheet.create({
    icon: {
        fontSize: 30,
    }
});