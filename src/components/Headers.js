import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';

const Header = () => { 
    return(
      <View style={styles.header}>
        <Text style={styles.title}>
          My Todos
        </Text>
      </View>
    );
  }
export default Header;  

const styles = StyleSheet.create({
  header: { 
    width: '100%',
    paddingVertical: 20,
    backgroundColor: 'coral',
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  },
  title: { 
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }
}) 
