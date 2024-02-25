import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function QuoteGenerator() {
  const [advice, setAdvice] = useState('');

  const fetchAdvice = async () => {
    try {
      const res = await axios.get('https://api.adviceslip.com/advice');
      // Access the advice property of the slip object in the response data
      setAdvice(res.data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>{advice}</Text>
        <TouchableOpacity style={styles.button} onPress={fetchAdvice}>
          <Text style={styles.buttonText}>GIVE ME ADVICE!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  card: {
    backgroundColor: 'whitesmoke',
    width: '40%',
    height: '20%',
    alignItems: 'center',
    borderRadius: 25,
    padding: '2%',
    shadowColor: 'black',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  heading: {
    height: '60%',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
    borderColor: 'rgba(22, 76, 167, 0.6)',
    borderWidth: 1,
    width: 210,
    height: 50,
  },
  buttonText: {
    color: '#164ca7',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.7,
  },
});
