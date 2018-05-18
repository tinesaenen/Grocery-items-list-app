import React from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import styles from "./Styles";

export default class AddOldItemsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", paddingTop: 200 }}>
        <Text>All items I bought in the past</Text>
      </View>
    );
  }
}
