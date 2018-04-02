import React from "react";
import { Text, View, FlatList, TextInput } from "react-native";
import { TabNavigator } from "react-navigation";
import styles from "./Styles";

import NewListScreen from "./NewListScreen";
import AllListsScreen from "./AllListsScreen";

export default TabNavigator({
  NewList: { screen: NewListScreen },
  AllLists: { screen: AllListsScreen }
});
