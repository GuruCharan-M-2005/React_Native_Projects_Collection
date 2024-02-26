import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function TwilioMessenger() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  const sendMessage = async () => {
    try {
      await axios.post('http://localhost:3001/send', { message, email });
      console.log("Message sent successfully");
      setMessage('');
      setEmail('');
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Twilio Messenger</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Message"
        onChangeText={text => setMessage(text)}
        value={message}
      />
      <TouchableOpacity style={styles.button} onPress={sendMessage}>
        <Text style={styles.buttonText}>Send Message</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
