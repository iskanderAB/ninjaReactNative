/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
/** Native  Components */
import Header from './components/Headers';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import SendBox from './components/SendBox';

const App = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    {name : "make app" , id: 1},
    {name : "play a game " , id: 2},
    {name : "read a book " , id: 3},
    {name : "go to club " , id: 4},
    {name : "take breakfast " , id: 5},
    {name : "go to mosque" , id: 6},
    {name : "learn real web connection" , id: 7},
    {name : " call abdallah " , id: 8},
    {name : "go to gym " , id: 9},
  ])

  /* Functions */
  const onPressHandler = (id) => {
    setTodos(todos.filter(v => v.id!==id));
  }
  const addTodoFunction = (text) => { 
    if(text.length > 3 ){ 
      setTodos([{name: text ,id:Math.random().toString()},...todos])
    }else{
      Alert.alert('OOPS','Todo must be over 3 chars',[ 
        {text: 'Undrestood',onPress: ()=> console.log("closed") }
      ])
    }
  }
  /* Hooks */
  useEffect(() => {
    console.log('text =>' , todos);
    return () => 0
  }, [todos])

  return (
    // <SendBox/>
    <TouchableWithoutFeedback
      onPress={()=> Keyboard.dismiss()}
    >
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo addTodoFunction={addTodoFunction}/>
          <View style={styles.list}>
            <FlatList
              data={todos}
              showsVerticalScrollIndicator={false}
              renderItem={
                ({item})=>(
                  <TodoItem name={item.name} onPressHandler={()=>onPressHandler(item.id)}/>
                )
              }
            >
            </FlatList>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: { 
    padding: 30,

    flex: 1
  },
  list: { 
    flex: 1,
    marginTop: 20,
    borderBottomColor: 'rgba(255, 0, 0, 0.05)',
    borderBottomWidth: 2,
  }
});
export default App;
