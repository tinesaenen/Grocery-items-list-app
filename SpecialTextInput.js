import React from "react";
import { TextInput, View } from "react-native";
import styles from "./Styles";

export default class SpecialTextInput extends React.Component {
  render() {
    return (
      <View style={styles.specialTextInputContainer}>
        <TextInput
          style={styles.itemInput}
          placeholder="add item"
          placeholderTextColor="#FA7D7D"
          returnKeyType="done"
          underlineColorAndroid="transparent"
          value={this.props.text}
          onChangeText={this.props.onChangeText}
          onSubmitEditing={this.props.onAddItem}
        />
      </View>
    );
  }
}
