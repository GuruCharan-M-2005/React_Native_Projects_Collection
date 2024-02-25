import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const ExpenseTracker = () => {
    const [balance, setBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [history, setHistory] = useState([]);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const URL = "http://localhost:3200/history";

    const fetchData = async () => {
        try {
            const res = await axios.get(URL);
            const data = res.data;
            if (data && data.length >= 3) {
                setBalance(data[0].amount);
                setIncome(data[1].amount);
                setExpense(data[2].amount);
                setHistory(data.slice(3)); // Exclude balance, income, and expense items
            }
        } catch (error) {
            console.log("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleAddTransaction = async () => {
        const newAmount = parseInt(amount);
        const isExpense = newAmount < 0;
        const newIncome = isExpense ? income : income + newAmount;
        const newExpense = isExpense ? expense + newAmount : expense;
        const newBalance = balance + newAmount;
        setIncome(newIncome);
        setExpense(newExpense);
        setBalance(newBalance);
        const newTransaction = {
            id: generateUUID(), 
            name: name,
            amount: newAmount,
        };
        try {
            await axios.post(URL, newTransaction);
            await axios.patch(`${URL}/0`, { amount: newBalance });
            await axios.patch(`${URL}/1`, { amount: newIncome });
            await axios.patch(`${URL}/2`, { amount: newExpense });
            fetchData();
        } catch (error) {
            console.log("Error adding transaction:", error);
        }
        setName('');
        setAmount('');
    };
    

    const generateUUID = () => {
        return Math.random().toString(36).substr(2, 9);
    };

    return (
        <View style={styles.container}>
            <View style={styles.balanceSection}>
                <Text>Balance: {balance}</Text>
                <View style={styles.incomeExpense}>
                    <Text>Income: {income}</Text>
                    <Text>Expense: {expense}</Text>
                </View>
            </View>
            <View style={styles.addTransactionSection}>
                <Text>Add Transaction</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Amount"
                    value={amount}
                    onChangeText={(text) => setAmount(text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddTransaction}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.historySection}>
                <Text>Transaction History</Text>
                <FlatList
                    data={history}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.transactionItem}>
                            <Text>{item.name}</Text>
                            <Text>{item.amount}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
    },
    balanceSection: {
        marginBottom: 20,
    },
    incomeExpense: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    addTransactionSection: {
        marginBottom: 20,
    },
    historySection: {
        marginBottom: 20,
    },
    input: {
        width: '100%',
        marginBottom: 10,
        height: 25,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#777',
        backgroundColor: '#fff',
    },
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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

export default ExpenseTracker;
