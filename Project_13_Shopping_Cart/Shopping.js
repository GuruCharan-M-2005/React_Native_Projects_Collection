import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

export default function Shopping() {
  const [items, setItems] = useState([]);
  const URL = "http://localhost:3200/items";

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const additemtocart = async (id) => {
    try {
      const response = await axios.get(`${URL}/${id}`);
      const currentItem = response.data;
      const newCount = currentItem.count + 1;
      await axios.patch(`${URL}/${id}`, { count: newCount });
      fetchData();
    } catch (error) {
      console.error('Error updating item count:', error);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.header}>Guru's Store of Mystery - Shopping</Text>
      <ScrollView contentContainerStyle={styles.mainItems}>
        {items.map((data) => (
          <View key={data.id} style={styles.mainEachItem}>
            <Image source={{ uri: data.image }} style={styles.mainImage} />
            <Text>{data.name}</Text>
            <Text>${data.price}</Text>
            <TouchableOpacity onPress={() => additemtocart(data.id)} style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mainItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainEachItem: {
    alignItems: 'center',
    margin: 10,
  },
  mainImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  buttonContainer: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
