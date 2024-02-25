import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function Adventure() {
  return (
    <View style={styles.adventureContainer}>
      <View style={styles.header}>
        <Text style={styles.headerLeft}>Advens</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity><Text style={styles.headerLink}>Home</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.headerLink}>Collections</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.headerLink}>Contact</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.headerLink}>Login</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.body1} id="body-1">
        <View style={styles.backgroundImage}>
          <View style={styles.foreground}>
            <Text style={styles.foregroundHeader}>Embark on an Adventure</Text>
            <Text style={styles.foregroundText}>Explore the unknown and embrace the journey.</Text>
            <TouchableOpacity style={styles.exploreButton}><Text style={styles.exploreButtonText}>Explore</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.body2} id="body-2">
        <View style={styles.grid1}>
          <View style={[styles.photo, styles.photo1]}>
            <TouchableOpacity style={styles.exploreButton}><Text style={styles.exploreButtonText}>Explore</Text></TouchableOpacity>
          </View>
          <View style={[styles.photo, styles.photo2]}>
            <TouchableOpacity style={styles.exploreButton}><Text style={styles.exploreButtonText}>Explore</Text></TouchableOpacity>
          </View>
        </View>
        <View style={styles.grid2}>
          <View style={[styles.photo, styles.photo3]}>
            <TouchableOpacity style={styles.exploreButton}><Text style={styles.exploreButtonText}>Explore</Text></TouchableOpacity>
          </View>
          <View style={[styles.photo, styles.photo4]}>
            <TouchableOpacity style={styles.exploreButton}><Text style={styles.exploreButtonText}>Explore</Text></TouchableOpacity>
          </View>
          <View style={[styles.photo, styles.photo5]}>
            <TouchableOpacity style={styles.exploreButton}><Text style={styles.exploreButtonText}>Explore</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer} id="footer">
        <View style={styles.footerColumn}>
          <Text style={styles.footerLink}>Instagram</Text>
          <Text style={styles.footerLink}>Facebook</Text>
          <Text style={styles.footerLink}>Twitter</Text>
        </View>
        <View style={styles.footerColumn}>
          <Text style={styles.footerLink}>Phone</Text>
          <Text style={styles.footerLink}>Email</Text>
          <Text style={styles.footerLink}>Discord</Text>
        </View>
        <View style={styles.footerColumn}>
          <Text style={styles.footerLink}>Developer</Text>
          <Text style={styles.footerLink}>Explorer</Text>
          <Text style={styles.footerLink}>Designer</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  adventureContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#222',
    color: '#fff',
    padding: 20,
    marginBottom: 20,
  },
  headerLeft: {
    fontSize: 24,
    marginLeft: 50,
  },
  headerRight: {
    flexDirection: 'row',
  },
  headerLink: {
    color: '#fff',
    marginRight: 20,
  },
  body1: {
    height: 400,
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  foreground: {
    textAlign: 'center',
    marginLeft: 100,
  },
  foregroundHeader: {
    fontSize: 36,
    marginTop: 150,
  },
  foregroundText: {
    fontSize: 18,
  },
  exploreButton: {
    padding: 10,
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: 5,
    marginTop: 20,
  },
  exploreButtonText: {
    color: '#fff',
  },
  body2: {
    padding: 20,
  },
  grid1: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  grid2: {
    flexDirection: 'row',
  },
  photo: {
    flex: 1,
    height: 300,
    position: 'relative',
  },
  photo1: {
    backgroundColor: '#f00',
  },
  photo2: {
    backgroundColor: '#0f0',
  },
  photo3: {
    backgroundColor: '#00f',
  },
  photo4: {
    backgroundColor: '#ff0',
  },
  photo5: {
    backgroundColor: '#0ff',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#222',
    color: '#fff',
    padding: 20,
  },
  footerColumn: {
    marginTop: 20,
    marginLeft: 200,
  },
  footerLink: {
    color: '#fff',
  },
});

export default Adventure;
