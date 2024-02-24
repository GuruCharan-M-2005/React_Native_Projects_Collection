// import React, { useState } from 'react';
// import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

// export default function SimpleForm()  {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleNameChange = (text) => {
//     setName(text);
//   };

//   const handleEmailChange = (text) => {
//     setEmail(text);
//   };

//   const handleSubmit = () => {
//     Alert.alert('Form Data', `Name: ${name}\nEmail: ${email}`);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your name"
//         onChangeText={handleNameChange}
//       /> 
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your email"
//         keyboardType="email-address"
//         onChangeText={handleEmailChange}
//       />  
//       <TouchableOpacity 
//         style={styles.button}
//         onPress={handleSubmit}
//       >
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 200,
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   button: {
//     backgroundColor: '#841584',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//   },
//   buttonText: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });


import React, { useState } from 'react';
import { View, Text, DrawerLayoutAndroid, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const navigationView = (
    <View style={styles.drawerContainer}>
      <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
        <Text style={styles.drawerItemText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
        <Text style={styles.drawerItemText}>Contact</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <DrawerLayoutAndroid
      drawerWidth={250}
      drawerPosition='right'
      renderNavigationView={() => navigationView}
      drawerOpen={isDrawerOpen}
      onDrawerClose={closeDrawer}
      onDrawerOpen={openDrawer}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={openDrawer} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>Menu</Text>
        </TouchableOpacity>
        <Text style={styles.content}>Main Content Goes Here</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  menuButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  menuButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  drawerItem: {
    marginBottom: 10,
  },
  drawerItemText: {
    fontSize: 18,
  },
});

export default App;
