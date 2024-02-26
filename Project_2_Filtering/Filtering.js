import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function Filtering() {
    const [searchValue, setSearchValue] = useState('');
    const [fruits] = useState(["Apple", "Banana", "Orange", "Grapes", "Strawberry",
        "Pineapple", "Watermelon", "Mango", "Kiwi", "Peach",
        "Pear", "Cherry", "Blueberry", "Plum", "Lemon",
        "Avocado", "Pomegranate", "Raspberry", "Blackberry", "Cranberry",
        "Apricot", "Coconut", "Fig", "Guava", "Lychee",
        "Passionfruit", "Tangerine", "Papaya", "Lime", "Dragonfruit"
    ]);

    const filterFruits = fruits.filter(item => item.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <View style={{ paddingTop: 20 }}>
            <Text style={{ textAlign: 'center' }}>Filtering Fruits</Text>
            <TextInput
                style={styles.textboxStyle}
                value={searchValue}
                onChangeText={(text) => setSearchValue(text)}
                placeholder="Search fruits..."
            />
             <FlatList
                data={filterFruits}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.listItemStyle}
                        onPress={() => setSearchValue(item)}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
            /> 
        </View>
    );
}

const styles = StyleSheet.create({
    textboxStyle: {
        width: 200,
        height: 50,
        marginHorizontal: 'auto',
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.2)',
        textAlign: 'center',
    },
    listItemStyle: {
        flex: 1,
        backgroundColor: 'lightgray',
        borderRadius: 15,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
});
