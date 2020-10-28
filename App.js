import { createAppContainer } from "react-navigation";
import Profile from "./src/screens/Profile";
import Projects from "./src/screens/Projects";
import SplashScreen from "./src/screens/SplashScreen";
import AddProfile from './src/screens/AddProfile';
import {
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView,
} from "react-navigation-drawer";
import React, { Component } from "react";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

import { AntDesign } from "@expo/vector-icons";
import { View, StyleSheet, ScrollView, Image } from "react-native";
import { render } from "react-dom";

export default class App extends Component {
  render() {
    const AppNavigator = createAppContainer(AppDrawerNavigator);
    return <AppNavigator />;
  }
}
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={styles.view}>
      <Image source={require("./assets/user2.jpg")}></Image>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const AppDrawerNavigator = createDrawerNavigator(
  {
   
    AddProfile:AddProfile,
    Profile: Profile,
    Projects: Projects,
   // SplashScreen:SplashScreen
    

   
  
  },
  {
    initialRouteName: "AddProfile",
  },
  { contentComponent: CustomDrawerComponent }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  view: {
    flex: 1,
    backgroundColor: "black",
  },
});
