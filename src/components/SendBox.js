import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const SendBox = () => { 
    return(
        <View style={styles.container}>
            <Text style={styles.One}> One </Text>
            <Text style={styles.Two}> Two </Text>
            <Text style={styles.Three}> Three </Text>
            <Text style={styles.Four}> Four </Text>
        </View>
    )
}

export default SendBox;

const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#bbb',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 40,
        alignItems: 'center'
    },
    One : { 
        flex: 1,
        borderRadius: 100,
        padding: 5,
        backgroundColor: 'violet'
    },
    Two : { 
        flex: 1,
        borderRadius: 100,
        padding: 10,
        backgroundColor: 'gold'
    },
    Three : { 
        flex: 1,
        borderRadius: 100,
        padding: 15,
        backgroundColor: 'orange'
    },
    Four : { 
        flex: 1,
        borderRadius: 100,
        padding: 20,
        backgroundColor: 'blue'
    },

})