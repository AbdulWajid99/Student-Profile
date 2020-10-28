import React from "react";
import { View, Text, StyleSheet, Button,TextInput ,TouchableOpacity} from "react-native";

import DeprecatedViewPropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes";

const Profile = (props) => {
  return (
    <View>
    
    <Text style={styles.text}>Add Profile</Text>
    <Text style={{color:"black",fontSize:18,marginTop:20}}>Enter Your name</Text>
    <TextInput
          style={styles.text}
          style={{ borderBottomColor: "#ccc" }}
          backgroundColor="black"
          
        
          autoCapitalize="words"
          selectionColor="white"
        />


    <Text style={{color:"black",fontSize:18,marginTop:20}}>Enter Your Roll Number</Text>
    <TextInput
          style={styles.text}
          style={{ borderBottomColor: "#ccc" }}
          backgroundColor="tomato"
        
          autoCapitalize="words"
          selectionColor="white"
        />

<Text style={{color:"black",fontSize:18,marginTop:20}}>Describe Yourself</Text>
    <TextInput
          style={styles.text}
          style={{ borderBottomColor: "#ccc" }}
          backgroundColor="tomato"
            multiline={true}
            autoCorrect={false}
         
          selectionColor="white"
          
        />
<Button  title="Add Profile"/>

{/* <TouchableOpacity
       
        >
          <Text
            style={{
              fontSize: 19,
              marginTop:30,
              width: "100%",
              textAlign: "center",
              textAlignVertical: "center",
              backgroundColor: "black",
              color: "#fff",
              
              alignSelf: "center",
              height: 40,
            }}
          >
            Add Profile
          </Text>
        </TouchableOpacity>

         */}
  </View> 
  );
  
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 30,
   
    flexDirection: "row",
    marginTop:100
  },
  text1: {
  
    fontSize: 30,
  },
  container1: {
    backgroundColor: "gray",
    borderRadius: 1,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 20,
  },

});

export default Profile;
