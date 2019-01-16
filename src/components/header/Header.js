import React from 'react';
import { Text, View} from 'react-native';
import HeaderStyle from './HeaderStyle';
import store from '../../store'

const Header = (props) => {
    console.log("store: ", store.getState());
    let users = store.getState().users;
    let username = props.isProfile ? users.username : '';
    return (
        <View style={HeaderStyle.mainCont}>
            <Text style={HeaderStyle.textStyle}>{props.title + username}</Text>
        </View>

    );
};

export default Header;