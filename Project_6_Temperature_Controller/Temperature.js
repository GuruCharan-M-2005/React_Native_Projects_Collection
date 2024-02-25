import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Temperature() {
  const [temperature, setTemperature] = useState(20);

  const increaseTemperature = () => {
    setTemperature(prevTemperature => prevTemperature + 1);
  };

  const decreaseTemperature = () => {
    setTemperature(prevTemperature => prevTemperature - 1);
  };

  // Function to calculate color based on temperature
  const getColor = (temp) => {
    if(temp <= 0) {
      return 'blue';
    } else if (temp <= 10) {
      return 'skyblue';
    } else if (temp <= 20) {
      return 'yellow';
    } else if (temp <= 35) {
      return 'orange';
    } else if (temp <= 50) {
      return 'red';
    } else {
      alert("High room temperature");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature Control App</Text>
      <Text style={[styles.temperatureDisplay, { color: getColor(temperature) }]}>{Math.round(temperature)}°</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={increaseTemperature}>
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={decreaseTemperature}>
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  temperatureDisplay: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
