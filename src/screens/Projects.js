import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Projects = () => {
  return (
 
    <View style={styles.container}>

   
   
  
      <Text style={styles.text}>My Projects</Text>
      <View style={styles.container1}>
        <Text style={styles.text1}>Object Oriented Programming</Text>
        <Text style={styles.text1}>Database System</Text>
        <Text style={styles.text1}>LDST Projects</Text>
        <Text style={styles.text1}>Mobile Application Development Project</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 100,
    marginLeft: 40,
    fontSize: 30,
    flex: 2,
    color: "#fff",
    justifyContent:"center",
   marginLeft:110
  },
  container: {
    backgroundColor: "tomato",
    flex:1,
  },
  container1: {
    backgroundColor: "#fff",
    flex: 4,
  },
  text1: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 25,
  },
});

export default Projects;
