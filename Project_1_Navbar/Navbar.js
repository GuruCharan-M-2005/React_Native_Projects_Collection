import React, { useState } from 'react';
import { View, Text, DrawerLayoutAndroid, TouchableOpacity, StyleSheet } from 'react-native';

const Navbar = () => {
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

export default Navbar;



// import 'react-native-gesture-handler';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import HomeScreen from './HomeScreen';
// import AboutScreen from './AboutScreen';
// import ContactScreen from './ContactScreen';

// const Drawer = createDrawerNavigator();

// export default function Navbar() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="About" component={AboutScreen} />
//         <Drawer.Screen name="Contact" component={ContactScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
