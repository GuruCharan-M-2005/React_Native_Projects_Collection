import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

export default function BudgetPlanner() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [newname, setNewname] = useState('');
  const [newcost, setNewcost] = useState(0);
  const [budget, setBudget] = useState(0);
  const [spend, setSpend] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const URL = "http://localhost:3200/items";

  const fetchData = async () => {
    try {
      const res = await axios.get(URL);
      setItems(res.data);
      const budgetItem = res.data.find(item => item.id === "1234567890");
      if (budgetItem) { setBudget(budgetItem.amount); }
      console.log("Data fetch success");
    } catch (err) {
      console.log("Data fetch failure" + err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const totalSpend = items.reduce((total, item) => {
      return item.id !== "1234567890" ? total + item.amount : total;
    }, 0);
    setSpend(totalSpend);
    setRemaining(budget - totalSpend);
  }, [items, budget]);

  const addNewData = async () => {
    const newone = {
      id: items.length.toString(),
      name: newname,
      amount: newcost
    }
    try {
      await axios.post(URL, newone);
      console.log("Data create success");
      setNewcost(0);
      setNewname('');
      fetchData();
    } catch (err) {
      console.log("Data create failure" + err);
    }
  }

  const deleteData = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      console.log("Data delete success");
      fetchData(); 
    } catch (err) {
      console.log("Data delete failure" + err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Budget Planner</Text>
      <View style={styles.budgetInfo}>
        <Text>Budget: {budget}</Text>
        <Text>Spend: {spend}</Text>
        <Text>Remaining: {remaining}</Text>
      </View>
      <Text>Expenses</Text>
      <TextInput
        style={styles.input}
        value={search}
        onChangeText={(text) => setSearch(text)}
        placeholder="Search items..."
      />
      <View style={styles.expensesContainer}>
        {items.filter((item) => (
          item.name.toLowerCase().includes(search.toLowerCase()) && item.name !== ''
        )).map((item) => (
          <View key={item.id} style={styles.expenseItem}>
            {item.id !== "12345" && (
              <View>
                <Text>{item.name}</Text>
                <Text>{item.amount}</Text>
                <TouchableOpacity onPress={() => deleteData(item.id)} style={styles.button}>
                  <Text style={styles.buttonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </View>
      <Text>Add Expenses</Text>
      <TextInput
        style={styles.input}
        value={newname}
        onChangeText={(text) => setNewname(text)}
        placeholder="New Expense"
      />
      <TextInput
        style={styles.input}
        value={newcost.toString()}
        onChangeText={(text) => setNewcost(parseInt(text, 10))}
        placeholder="Cost"
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={addNewData} style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  budgetInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 5,
    backgroundColor: '#444',
    color: '#fff',
  },
  expensesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  expenseItem: {
    backgroundColor: '#444',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});
