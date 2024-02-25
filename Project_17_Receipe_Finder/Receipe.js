import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

export default function Receipe() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');

  const URL = "http://localhost:3200/recipes";

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

  const handleSearchChange = (text) => {
    setSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.receipeContainer}>
        <Text style={styles.title}>Guru's Recipe Center</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={search}
          onChangeText={handleSearchChange}
        />
      </View>
      <FlatList
        data={items.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemIngredients}><Text style={styles.heading}>Ingredients:</Text> {item.ingredients}</Text>
            <Text style={styles.itemDescription}><Text style={styles.heading}>Description:</Text> {item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.itemsContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  receipeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 'auto',
  },
  searchInput: {
    width: '60%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    fontSize: 16,
  },
  itemsContainer: {
    flexGrow: 1,
  },
  item: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    width: '45%',
  },
  itemName: {
    fontSize: 20,
    marginBottom: 10,
  },
  itemIngredients: {
    fontSize: 18,
    marginBottom: 10,
  },
  itemDescription: {
    fontSize: 17,
  },
  heading: {
    fontWeight: 'bold',
  },
});
