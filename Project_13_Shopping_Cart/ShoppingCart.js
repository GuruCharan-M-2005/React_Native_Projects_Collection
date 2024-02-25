import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

export default function ShoppingCart() {
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
            <TouchableOpacity onPress={() => additemtocart(data.id)}>
              <View style={styles.mainItemButton}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </View>
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
    fontSize: 30,
    marginBottom: 20,
  },
  mainItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 20,
  },
  mainEachItem: {
    borderRadius: 15,
    backgroundColor: 'rgba(0,0,0,0.1)',
    padding: 20,
    marginBottom: 20,
    width: '30%',
    alignItems: 'center',
  },
  mainImage: {
    borderRadius: 50,
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  mainItemButton: {
    backgroundColor: 'rgb(116, 121, 185)',
    borderRadius: 15,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
