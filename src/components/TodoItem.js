import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const TodoItem = ({name, onPressHandler}) => { 
    return (
        <TouchableOpacity style={styles.item} onPress={onPressHandler} >
            <Icon 
                name="delete" 
                size={20} 
                
                style={styles.button}
            />
            <Text style={styles.itemText}>
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
        borderRadius: 10,
        flexDirection: 'row',
    },
    itemText: { 
        marginLeft: 10
    }
})