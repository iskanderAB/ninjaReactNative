/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App = () => {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text> hello iskander abbassi i'm from tunisia  </Text>
        <Text> hello iskander abbassi i'm from tunisia  </Text>
        <Text> hello iskander abbassi i'm from tunisia  </Text>
        <Text> hello iskander abbassi i'm from tunisia  </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: { 
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: { 
    fontWeight: 'bold'
  },
  body: { 
    backgroundColor: 'yellow',
    padding: 20
  }
});

export default App;
