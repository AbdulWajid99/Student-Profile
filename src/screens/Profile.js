import React from "react";
import { View, Text, StyleSheet, Button,Image } from "react-native";


const Profile = (props) => {
  return (
    <View >
      <Text style={styles.text}> Profile</Text>
      <View >
<View style={styles.background} style={{backgroundColor:"tomato"}}>     
 <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../../assets/ssuet.png")} />
        <Text style={{fontSize:20,justifyContent:"space-between", marginBottom:20}}>
          Name: Abdul Wajid
        </Text>
        <Text style={{fontSize:20, marginBottom:20,justifyContent:"space-around"}}>
          Roll Number: 2018-CS-173
        </Text>
        <Text style={{textAlign:"center",fontSize:20}}>
          Description:My name is Abdul Wajid, I'm the student of Sir Syed University of Engineering and Technology. I like to read books and watch movies.
        </Text>
        </View>
        </View>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "tomato",

  },
  text: {
    color: "black",
    textAlign: "center",
    justifyContent:"center",
    fontSize: 40,
    marginTop:20,
    
    flexDirection: "row",
   
  },

  logocontainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
    marginTop:30
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
    width: null,
    marginTop:0.5
  },
});

export default Profile;
