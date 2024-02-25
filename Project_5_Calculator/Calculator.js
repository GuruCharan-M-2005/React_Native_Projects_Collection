import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.calculator}>
      <TextInput
        style={styles.input}
        value={input}
        onChangeText={(text) => setInput(text)}
        placeholder="0"
      />
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => handleClick('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleClick('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleClick('9')}>
          <Text>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.operator]} onPress={() => handleClick('/')}>
          <Text>/</Text>
        </TouchableOpacity>

        {/* Add other buttons similarly */}

        <TouchableOpacity style={[styles.button, styles.clear]} onPress={() => handleClick('C')}>
          <Text>C</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.result}>
        <Text>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    width: 250,
    margin: 'auto',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    fontSize: 18,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  button: {
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    minWidth: '22%',
    alignItems: 'center',
  },
  operator: {
    backgroundColor: '#f0c040',
  },
  clear: {
    backgroundColor: '#ff4d4d',
  },
  result: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
});

export default Calculator;
