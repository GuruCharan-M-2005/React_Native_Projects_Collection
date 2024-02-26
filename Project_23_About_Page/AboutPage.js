import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { WebView } from 'react-native-webview';
import { Video } from 'expo-av';

import agreementVideo from './agreement.mp4';
import ratingVideo from './rating.mp4';
import successVideo from './success.mp4';
import telephoneBookVideo from './telephone-book.mp4';

export default function AboutPage() {
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
      <View style={styles.mapContainer}>
        <WebView
          source={{ uri: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.51346885513!2d76.88483286798547!3d11.01395778797012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1708864197688!5m2!1sen!2sin' }}
          style={styles.map}
        />
      </View>
      <View style={styles.marqueeContainer}>
        <Text style={styles.marqueeText}>100% Quality, 100% secure application used for business, check it out now..</Text>
      </View>
      <View style={styles.formZone}>
        <View style={styles.picsClass}>
          <Video
            source={agreementVideo}
            style={styles.video}
            isLooping
            isMuted
            shouldPlay
          />
          <Text style={styles.heading}>Contact us</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter your Email"
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter your Number"
          onChangeText={text => setMessage(text)}
          value={message}
        />
        <TouchableOpacity style={styles.button} onPress={sendMessage}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contactZone}>
        <View style={styles.contactGrid}>
          <View style={styles.picsClass}>
            <Video
              source={ratingVideo}
              style={styles.video}
              isLooping
              isMuted
              shouldPlay
            />
            <Text style={styles.heading}>ABOUT</Text>
          </View>
          <Text style={styles.contentText}>
            Hello there, Welcome to our app. This is the best platform as you expected. We are making this universal.
          </Text>
          {/* Add more text or content */}
        </View>
        {/* Add more contact grids */}
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
  mapContainer: {
    width: '90%',
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  marqueeContainer: {
    backgroundColor: 'rgba(86, 84, 84,5)',
    padding: 5,
    marginBottom: 20,
  },
  marqueeText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'cursive',
  },
  formZone: {
    width: '60%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 35,
    borderRadius: 50,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#6e9cc5',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  contactZone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactGrid: {
    width: '30%',
  },
  picsClass: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  video: {
    width: 60,
    height: 60,
    borderRadius: 25,
    marginRight: 20,
  },
  heading: {
    fontSize: 20,
  },
  contentText: {
    fontSize: 16,
  },
});
