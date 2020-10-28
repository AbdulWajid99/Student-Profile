import React from "react";
import {
  StyleSheet,
  Image,
  Button,
  ImageBackground,
  View,
  Text,
  TouchableHighlight,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DeprecatedViewPropTypes from "react-native/Libraries/DeprecatedPropTypes/DeprecatedViewPropTypes";

const SplashScreen = (props) => {
  setTimeout(() => {
    props.navigation.navigate("Profile");
  }, 3000);

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/azam.png")}
    >
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require("../../assets/ssuet.png")} />
        <Text style={styles.text}>
           Student Profile
          System
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    alignSelf: "stretch",
    width: null,
  },
  login: {
    width: "100%",
    height: 50,
    backgroundColor: "#F92660",
    borderWidth: 2,
  },
  btext: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  text: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
    marginTop:30
  },
  logocontainer: {
    position: "absolute",
    top: 30,
    alignItems: "center",
    marginTop:60
  },
});

export default SplashScreen;
