import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default function Notepad() {
  const [items, setItems] = useState([]);
  const [newdata, setNewData] = useState('');
  const [search, setSearch] = useState('');
  const [darkTheme, setDarkTheme] = useState(false);
  const URL = "http://localhost:3200/items";

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setItems(res.data);
      console.log("success fetching");
    } catch (err) {
      console.log("error fetching" + err);
    }
  }

  const createData = async () => {
    try {
      if (newdata !== '') {
        await axios.post(URL, { data: newdata });
        setNewData('');
        console.log("success creating");
        fetchData();
      } else {
        alert("Enter data!!!");
      }
    } catch (err) {
      console.log("error creating" + err);
    }
  }

  const deleteData = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      console.log("success deleting");
      fetchData();
    } catch (err) {
      console.log("error deleting" + err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleThemeToggle = () => {
    setDarkTheme(!darkTheme);
  }

  return (
    <View style={[styles.container, darkTheme ? styles.darkTheme : styles.lightTheme]}>
      <View style={styles.notepadActions}>
        <TextInput
          style={styles.notepadSearch}
          value={search}
          onChangeText={(text) => setSearch(text)}
          placeholder="Search..."
        />
        <TouchableOpacity style={styles.themeToggleBtn} onPress={handleThemeToggle}>
          <Text style={styles.themeToggleText}>Toggle Theme</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.noteContainer}>
        {items
          .filter(ans => ans.data.toLowerCase().includes(search.toLowerCase()))
          .map(ans => (
            <View style={styles.noteFlex} key={ans.id}>
              <View style={[styles.note, darkTheme ? styles.darkNote : null]}>
                <Text>{ans.data}</Text>
              </View>
              <View style={styles.noteActions}>
                <TouchableOpacity onPress={() => deleteData(ans.id)} style={styles.deleteBtn}>
                  <Text style={styles.deleteBtnText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </ScrollView>
      <View style={styles.createNote}>
        <TextInput
          style={styles.notepadInput}
          value={newdata}
          onChangeText={(text) => setNewData(text)}
          placeholder="Enter your note..."
        />
        <TouchableOpacity style={styles.createBtn} onPress={createData}>
          <Text style={styles.createBtnText}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  },
  lightTheme: {
    backgroundColor: '#fff',
  },
  darkTheme: {
    backgroundColor: '#333',
  },
  notepadActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  notepadSearch: {
    width: '70%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  themeToggleBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  themeToggleText: {
    color: '#fff',
  },
  noteContainer: {
    width: '100%',
  },
  noteFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  note: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  darkNote: {
    backgroundColor: '#444',
    color: '#fff',
  },
  noteActions: {
    flex: 1,
    alignItems: 'flex-end',
  },
  deleteBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
  },
  deleteBtnText: {
    color: '#fff',
  },
  createNote: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notepadInput: {
    flex: 1,
    height: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 16,
  },
  createBtn: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
    marginLeft: 20,
  },
  createBtnText: {
    color: '#fff',
  },
});
