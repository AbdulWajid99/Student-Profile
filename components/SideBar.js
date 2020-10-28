import React from "react";
import {
  ActivityIndicatorBase,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DrawerNavigationItems } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { render } from "react-dom";

const SideBar = (props) => (
  <ScrollView>
    <ImageBackground
      source={require("../assets/asas.jpg")}
      style={{ width: undefined, padding: 16, paddingTop: 48 }}
    >
      <View>
        <Image source={require("../assets/user1.png")} />
      </View>
    </ImageBackground>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 60,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#FFFF",
  },
});

export default SideBar;
