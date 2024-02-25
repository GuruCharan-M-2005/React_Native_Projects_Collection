import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HelloWorld = () => {
  return (
    <View style={styles.helloWorld}>
      <Text style={styles.text}>Hello, World!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  helloWorld: {
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    color: '#333',
    fontSize: 36,
  },
});

export default HelloWorld;
