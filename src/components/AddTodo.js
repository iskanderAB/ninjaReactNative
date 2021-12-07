import React, { useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';


const AddTodo = ({addTodoFunction}) => { 
    const [text, setText] = useState('');
    const changeTextHandler = (textVlaue) => { 
        setText(textVlaue);
    }
    return(
        <View>
            <TextInput
                style={styles.input}
                placeholder='New item ... '
                value={text}
                onChangeText={changeTextHandler}
            />
            <Button 
                onPress={()=>{
                    addTodoFunction(text);
                    setText('');
                }} 
                title='Add todo' color='coral'/>
        </View>
    )
}
export default AddTodo;
const styles = StyleSheet.create({
    input : { 
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})