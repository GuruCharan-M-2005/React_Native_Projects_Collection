import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Portfolio() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerMainText}>Gurucharan</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.headerList}>
            <TouchableOpacity onPress={() => {}} style={styles.headerListItems}>
              <Text>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.headerListItems}>
              <Text>Projects</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={styles.headerListItems}>
              <Text>Contact</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View id='about-container' style={styles.aboutContainer}>
        <View style={styles.textContainer}>
          <View style={styles.textArea}>
            <Text>Hello! I am Gurucharan...</Text>
          </View>
          <View style={styles.textBrief}>
            <Text>As a developer, I had specialized in the creation, design, and implementation of software solutions, applications, or systems. My expertise lies in utilizing programming languages, frameworks, and tools to address specific user requirements and overcome technological hurdles. I excel in collaborative team environments, leveraging problem-solving skills, creativity, and technical proficiency to deliver innovative and effective software products.</Text>
          </View>
        </View>
      </View>
      <View id='projects-container' style={styles.projectsContainer}>
        <Text style={styles.projectsTopic}>My Projects</Text>
        <View style={styles.projectList}>
          <View style={styles.projectGrid}>
            <TouchableOpacity onPress={() => {}} style={styles.projectCard}></TouchableOpacity>
            <Text style={styles.projectGridText}>Fundraiser App</Text>
          </View>
          <View style={styles.projectGrid}>
            <TouchableOpacity onPress={() => {}} style={styles.projectCard}></TouchableOpacity>
            <Text style={styles.projectGridText}>React Projects</Text>
          </View>
          <View style={styles.projectGrid}>
            <TouchableOpacity onPress={() => {}} style={styles.projectCard}></TouchableOpacity>
            <Text style={styles.projectGridText}>React-Native Projects</Text>
          </View>
        </View>
      </View>
      <View id='contact-container' style={styles.contactContainer}>
        <Text style={styles.formHeading}>Contact Us</Text>
        <View style={styles.formMain}>
          <View style={styles.formGroup}>
            <TextInput style={styles.input} placeholder='Your Name' />
          </View>
          <View style={styles.formGroup}>
            <TextInput style={styles.input} placeholder='Your Email' />
          </View>
          <View style={styles.formGroup}>
            <TextInput style={styles.input} placeholder='Your Message' />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.button}>
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: 'linear-gradient(rgb(38, 37, 37), rgb(19, 19, 24), rgb(39, 36, 36), rgb(64, 65, 64))',
    color: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerMainText: {
    fontSize: 35,
    color: 'gray',
    marginTop: 10,
    marginLeft: 25,
  },
  headerList: {
    flexDirection: 'row',
    gap: 55,
  },
  headerListItems: {
    fontSize: 25,
    color: 'gray',
  },
  textContainer: {
    marginTop: 100,
    width: 900,
  },
  textArea: {
    marginLeft: 100,
    fontSize: 70,
  },
  textBrief: {
    marginTop: 50,
    color: 'gray',
    fontSize: 32,
    marginLeft: 100,
  },
  projectsTopic: {
    fontSize: 65,
    marginLeft: 100,
  },
  projectList: {
    marginLeft: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  projectGrid: {
    borderWidth: 1,
    borderColor: 'gray',
    height: 400,
    borderRadius: 30,
    width: '30%',
    marginBottom: 20,
  },
  projectGridText: {
    marginTop: 350,
    marginLeft: 20,
  },
  formHeading: {
    fontSize: 65,
    marginBottom: 50,
  },
  formMain: {
    width: 1200,
  },
  formGroup: {
    marginBottom: 40,
  },
  input: {
    padding: 8,
    width: 700,
    height: 50,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#7c7da1',
    color: 'white',
    padding: 10,
    width: 100,
    height: 50,
    borderRadius: 20,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
