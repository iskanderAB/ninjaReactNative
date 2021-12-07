import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const TodoItem = ({name, onPressHandler}) => { 
    return (
        <View style={styles.item}>
            <Text>
                {name}
            </Text>
            <Icon 
                name="rocket" 
                size={20} 
                onPress={onPressHandler} 
                style={styles.button}
            />
        </View>
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
        justifyContent: 'space-between'
    },
    button: { 

    }
})