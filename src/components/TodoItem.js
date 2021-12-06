import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const TodoItem = ({name, onPressHandler}) => { 
    return (
        <TouchableOpacity onPress={onPressHandler}>
            <Text
                style={styles.item}
            >
                {name}
            </Text>
        </TouchableOpacity>
    )
}
export default TodoItem;

styles = StyleSheet.create({
    item: { 
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    }   
})