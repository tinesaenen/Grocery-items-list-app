import React from "react";
import { Text, View, FlatList, TextInput } from "react-native";
import { TabNavigator } from "react-navigation";
import styles from "./Styles";

import SpecialTextInput from "./SpecialTextInput";
import GroceryItem from "./GroceryItem";
import ListButton from "./ListButton";

const INITIAL_ITEMS = [
  { key: 1507129580608, text: "Kiwi", complete: false },
  { key: 1507139597587, text: "Water", complete: false }
];

export default class NewListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: INITIAL_ITEMS, text: "" };
  }

  onChangeText(text) {
    this.setState({ text });
  }

  onAddItem() {
    const newItem = { key: Date.now(), text: this.state.text, complete: false };
    const newItems = [...this.state.items, newItem];
    this.setState({ items: newItems, text: "" });
    console.log(newItems);
  }

  onToggleItem(key, complete) {
    const newItems = this.state.items.map(item => {
      if (item.key !== key) return item;
      return { ...item, complete };
    });
    this.setState({ items: newItems });
  }

  render() {
    return (
      <View style={styles.container}>
        <SpecialTextInput
          text={this.state.text}
          onChangeText={this.onChangeText.bind(this)}
          onAddItem={this.onAddItem.bind(this)}
        />
        <FlatList
          style={styles.itemList}
          data={this.state.items}
          renderItem={this.renderItem.bind(this)}
        />
      </View>
    );
  }

  renderItem(item) {
    return (
      <GroceryItem
        item={item.item}
        onToggleItem={this.onToggleItem.bind(this, item.item.key)}
      />
    );
  }
}
