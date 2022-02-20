import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import TodoItem from './components/TodoItem';
import React from 'react';

export default class App extends React.Component<{}, { todoInput: string, todos: { id: number; title: string; done: boolean; }[] }> {
  constructor(props: any){
    super(props);
    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'Something', done: false},
        {id: 1, title: 'Something else', done: false}
      ]
    }
  }

  addNewTodo() {
    let todos = this.state.todos;

    todos.unshift({
      id: todos.length + 1,
      title: this.state.todoInput,
      done: false
    });

    this.setState({
      todos,
      todoInput: ''
    });
    
  }

  render(){
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} style= 'inverted' />
        <Header title='Dupsko' />
        <InputBar
          addNewTodo={ () => this.addNewTodo()}
          textChange={(todoInput: string) => this.setState({ todoInput })}
          todoInput={this.state.todoInput}
        />
        <FlatList 
          data={this.state.todos}
          extraData={this.state}
          keyExtractor={(item, index)=> index.toString()}
          renderItem={ ({item, index})=> {
            return(
              <TodoItem todoItem={item}/>
            )
          }}
        />
      </View>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
