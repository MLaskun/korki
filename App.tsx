import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InputBar from './components/InputBar';
import React from 'react';

export default class App extends React.Component<{}, { todoInput: string }> {
  constructor(props: any){
    super(props);
    this.state = {
      todoInput: ''
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <StatusBar translucent={false} style= 'inverted' />
        <Header title='Dupsko' />
        <InputBar textChange={(todoInput: string) => this.setState({ todoInput })} />
        <Text>{this.state.todoInput}</Text>
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
