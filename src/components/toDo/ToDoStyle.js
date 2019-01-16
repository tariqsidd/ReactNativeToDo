import { StyleSheet } from 'react-native'

export default ToDoStyle = StyleSheet.create({
    mainCont: {
        flex: 1,
        backgroundColor: '#fff'
    },

    todoList: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical:15,
        alignItems: 'center'
    },

    todoTitle: {
        fontSize: 25,
    },

    tag: {
        borderRadius: 50,
        height: 24,
        backgroundColor:'#4a90e2',
        padding: 12,
        marginHorizontal: 10
    }
})