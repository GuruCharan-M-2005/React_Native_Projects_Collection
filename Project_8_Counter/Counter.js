import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementTo10 = () => {
    setCount(count + 10);
  };

  const decrementTo10 = () => {
    setCount(count - 10);
  };

  return (
    <View style={styles.counterContainer}>
      <Text style={styles.counterText}>Counter</Text>
      <TouchableOpacity style={styles.counterButton} onPress={incrementTo10}>
        <Text style={styles.buttonText}>+10</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.counterButton} onPress={increment}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.counterButton} onPress={decrement}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.counterButton} onPress={decrementTo10}>
        <Text style={styles.buttonText}>-10</Text>
      </TouchableOpacity>
      <Text style={styles.counterValue}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
    marginTop: 150,
  },
  counterText: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  counterButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 4,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  counterValue: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Counter;
