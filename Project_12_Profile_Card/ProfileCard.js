import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const userData = [
  {
    name: "Sam",
    city: "California",
    field: "UI-UX Designer",
    skills: ["UI/UX", "MongoDB", "Javascript", "HTML", "CSS", "Java"],
    online: false,
    profile: require("./pro12.jpeg")
  },
  {
    name: "Robert",
    city: "San Francisco",
    field: "Senior Software Developer",
    skills: ["C", "C++", "Python", "Java", "C#", "Mysql", "HTML", "CSS", "Javascript"],
    online: true,
    profile: require("./pro7.jpeg")
  },
  {
    name: "Martin",
    city: "Mexico",
    field: "Full Stack Web Developer",
    skills: ["HTML", "CSS", "Javascript", "UI/UX", "MongoDB", "Java"],
    online: true,
    profile: require("./pro8.jpeg")
  },
];

const User = ({ name, city, field, skills, online, profile }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={[styles.pro, { backgroundColor: online ? 'greenyellow' : '#febb0b' }]}>
        {online ? "Online" : "Offline"}
      </Text>
      <Image source={profile} style={styles.img} />
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{city}</Text>
      <Text style={styles.text}>{field}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#0984e3' }]}>
          <Text style={styles.buttonText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: 'transparent', borderWidth: 1, borderColor: '#0984e3' }]}>
          <Text style={[styles.buttonText, { color: '#0984e3' }]}>Following</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.skills}>
        <Text style={styles.skillHeading}>Skills</Text>
        <View style={styles.skillList}>
          {skills.map((item, index) => (
            <Text key={index} style={styles.skill}>{item}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const Profile_Card = () => {
  return (
    <View style={styles.mainContainer}>
      {userData.map((item, index) => (
        <User
          key={index}
          name={item.name}
          city={item.city}
          field={item.field}
          skills={item.skills}
          online={item.online}
          profile={item.profile}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  cardContainer: {
    backgroundColor: '#353b48',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    shadowRadius: 10,
    elevation: 5,
    padding: 20,
    margin: 10,
    alignItems: 'center',
  },
  pro: {
    color: '#231e39',
    fontWeight: 'bold',
    fontSize: 14,
    padding: 3,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  text: {
    marginVertical: 5,
    color: '#b3b8cd',
  },
  buttons: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  skills: {
    backgroundColor: '#2f3640',
    padding: 10,
    marginTop: 15,
    alignItems: 'flex-start',
    borderRadius: 5,
  },
  skillHeading: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#b3b8cd',
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  skill: {
    borderWidth: 1,
    borderColor: '#595180',
    borderRadius: 2,
    paddingHorizontal: 5,
    paddingVertical: 3,
    fontSize: 12,
    color: '#b3b8cd',
    marginRight: 5,
    marginBottom: 5,
  },
});

export default Profile_Card;
