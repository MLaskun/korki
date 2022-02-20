import React from 'react';
import { StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

interface ITodoItem{
    todoItem: { id: number; title: string; done: boolean; }
}

export default class TodoItem extends React.Component<ITodoItem> {
  constructor(props: ITodoItem){
      super(props);

  }
    render() {
        const todoItem  = this.props.todoItem;

        return(
            <TouchableOpacity style={styles.todoItem}>
                <Text style={(todoItem.done) ? { color: '#AAAAAA'} : { color: '#313131'}}>
                    { todoItem.title}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    todoItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15
    }
})