import React from "react";
import { StyleSheet, Text, View, TextInput, Switch } from "react-native";
import styles from "./Styles";

export default class GroceryItem extends React.Component {
  render() {
    const item = this.props.item;
    return (
      <View style={styles.item}>
        <Text style={[styles.itemText, item.complete && styles.complete]}>
          {item.text}
        </Text>
        <Switch
          value={item.complete}
          onTintColor="#FA7D7D"
          onValueChange={this.props.onToggleItem}
        />
      </View>
    );
  }
}
