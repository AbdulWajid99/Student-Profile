import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-navigation";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default class Screens extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={this.props.navigation.openDrawer}
          >
            <MaterialCommunityIcons name="email" size={24} color="#161924" />
          </TouchableOpacity>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.text}>{this.props.name}Drawer </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    color: "#161924",
    fontSize: 20,
  },
});
