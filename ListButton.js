import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Button,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./Styles";

export default class ListButton extends React.Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            borderWidth: 2,
            borderColor: "#FA7D7D",
            borderRadius: 100,
            paddingTop: 6,
            paddingBottom: 8,
            paddingHorizontal: 10
          }}
        >
          <Text style={{ color: "#FA7D7D", fontSize: 20 }}>
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
