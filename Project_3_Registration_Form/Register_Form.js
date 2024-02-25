import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    conpass: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    username: '',
    password: '',
    conpass: ''
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', username: '', password: '', conpass: '' };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const usernameRegex = /^[a-zA-Z_]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    if (!formData.name || !usernameRegex.test(formData.name)) {
      newErrors.username = 'Username is invalid';
      isValid = false;
    }
    if (!formData.password || formData.password.length < 6 || !passwordRegex.test(formData.password)) {
      newErrors.password = 'Password is invalid';
      isValid = false;
    }
    if (!formData.conpass || formData.conpass !== formData.password) {
      newErrors.conpass = 'Password is unmatched';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Form Submitted...!!!');
      console.log('Form submitted:', formData);
    } else {
      let errorMessage = '';
      if (errors.username !== '') errorMessage = errors.username;
      else if (errors.email !== '') errorMessage = errors.email;
      else if (errors.password !== '') errorMessage = errors.password;
      else if (errors.conpass !== '') errorMessage = errors.conpass;
      Alert.alert('Error', errorMessage);
      console.log('Form validation failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
        placeholder='Username'
      />
      <TextInput
        style={styles.input}
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
        placeholder='Email'
      />
      <TextInput
        style={styles.input}
        value={formData.password}
        onChangeText={(text) => handleChange('password', text)}
        placeholder='Password'
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        value={formData.conpass}
        onChangeText={(text) => handleChange('conpass', text)}
        placeholder='Confirm Password'
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 35,
    marginVertical: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'purple',
  },
  button: {
    marginTop: 20,
    width: 150,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'cursive',
  },
});
