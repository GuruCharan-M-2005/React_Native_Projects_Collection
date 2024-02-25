import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default function Todo_List() {
  const URL = 'http://localhost:3700/Items';

  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setItems(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createNewItem = async () => {
    try {
      if (newItem !== '') {
        const response = await axios.post(URL, { name: newItem, checked: false });
        console.log('New item created:');
        fetchData();
        setNewItem('');
      }
    } catch (error) {
      console.error('Error creating new item:', error);
    }
  };

  const updateCheckedStatus = async (id, checked) => {
    try {
      const response = await axios.patch(`${URL}/${id}`, { checked });
      console.log('Item updated:');
      fetchData();
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`${URL}/${id}`);
      console.log('Item deleted:');
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={newItem}
          onChangeText={setNewItem}
          placeholder="Enter new task"
        />
        <TouchableOpacity style={styles.addButton} onPress={createNewItem}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.todoList}>
        {items.map((item) => (
          <View style={styles.todoItem} key={item.id}>
            <TouchableOpacity onPress={() => updateCheckedStatus(item.id, !item.checked)}>
              <Text style={[styles.checkBox, { backgroundColor: item.checked ? 'blue' : 'white' }]}></Text>
            </TouchableOpacity>
            <Text style={[styles.todoText, { textDecorationLine: item.checked ? 'line-through' : 'none' }]}>
              {item.name}
            </Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(item.id)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  todoList: {
    flex: 1,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  checkBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'blue',
    marginRight: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
  deleteButton: {
    paddingHorizontal: 10,
  },
});
