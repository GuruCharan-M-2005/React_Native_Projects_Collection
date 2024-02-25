import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

const QR_Code = () => {
  const [img, setImg] = useState("");
  const [qrdata, setQrdata] = useState("");

  const generateQR = async () => {
    try {
      const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrdata)}`;
      setImg(url);
    } catch (error) {
      console.error("Error generating QR code", error);
    }
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.heading}>QR CODE GENERATOR</Text>
      {img && <Image source={{ uri: img }} style={styles.qrImg} />}
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Data for QR code:</Text>
        <TextInput
          style={styles.input}
          value={qrdata}
          onChangeText={setQrdata}
          placeholder='Enter data for QR code'
        />
        <Button title="Generate QR Code" onPress={generateQR} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontWeight: '600',
    fontSize: 18,
    color: '#3498db',
    borderBottomWidth: 1,
    borderBottomColor: '#f1efef',
    paddingVertical: 10,
  },
  qrImg: {
    padding: 5,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  inputContainer: {
    width: '80%',
    marginTop: 20,
    alignItems: 'center',
  },
  inputLabel: {
    marginBottom: 8,
    color: '#3498db',
    fontSize: 15,
    fontWeight: '500',
  },
  input: {
    padding: 12,
    marginBottom: 20,
    width: '100%',
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#3498db',
  },
});

export default QR_Code;
