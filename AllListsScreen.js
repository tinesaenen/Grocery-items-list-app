import React from "react";
import { Text, View } from "react-native";
import styles from "./Styles";

export default class AllListsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", paddingTop: 200 }}>
        <Text>All grocery lists I saved in the past</Text>
      </View>
    );
  }
}
 