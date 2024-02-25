import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ContactList() {
  const [items, setItems] = useState([]);
  const URL = "http://localhost:3200/items";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setItems(res.data);
      console.log("Fetch Success");
    } catch (err) {
      console.log("Fetch Failure" + err);
    }
  };

  const deleteUser = async (id) => {
    try {
      const res = await axios.delete(`${URL}/${id}`);
      console.log("Delete Success");
      fetchData();
    } catch (err) {
      console.log("Delete Failure" + err);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.contactList}>
      {items.map((data) => (
        <View key={data.id}>
          <View style={styles.contactItem}>
            <Image source={{ uri: data.image }} style={styles.contactImage} />
            <View style={styles.contactData}>
              <Text style={styles.contactText}>{data.name}</Text>
              <Text style={styles.contactText}>{data.age}</Text>
              <Text style={styles.contactText}>{data.email}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => deleteUser(data.id)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contactList: {
    padding: 20,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  contactData: {
    backgroundColor: '#1e1e2e',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  contactText: {
    color: '#fff',
    marginVertical: 2,
  },
  deleteButton: {
    marginLeft: 100,
    width: 50,
    height: 25,
    marginTop: 10,
    borderRadius: 15,
    backgroundColor: 'rgb(96, 130, 198)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
  },
});
