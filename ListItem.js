import React from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";

export default class TodoItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <View style={styles.item}>
        <Text style={[styles.itemText, item.complete && styles.complete]}>
          {item.text}
        </Text>
        <Switch value={item.complete} onValueChange={this.props.onToggleItem} />
      </View>
    );
  }
}
