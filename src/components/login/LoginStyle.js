import { StyleSheet } from 'react-native'

export default LoginStyle = StyleSheet.create({
    mainCont: {
        flex:1,
        backgroundColor: '#fff'
    },

    LogoCont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'

    },

    LogoText: {
        fontSize:30
    },

    inputCont:{
        // backgroundColor: 'red'
        marginTop: 30
    },

    btn:{
        height: 65,
        backgroundColor:'#4cd964',
        marginHorizontal: 20,
        marginVertical:10,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnText:{
        fontSize: 15,
        color: '#fff'

    },

    textInputCont:{
        height: 65,
        marginHorizontal: 20,
        marginVertical:10,
        borderWidth: 1,
        borderRadius:5,
        justifyContent:'center',
        borderColor:'#e5e5e5'
    },
    input: {
        fontSize: 15,
        marginHorizontal: 10,
    }
})