import React from "react";
import { Text, View, FlatList, TextInput, Image } from "react-native";
import { TabNavigator } from "react-navigation";
import styles from "./Styles";

import NewListScreen from "./NewListScreen";
import AllListsScreen from "./AllListsScreen";

export const newListIcon = require("./img/newListIcon2-02.png");
export const allListsIcon = require("./img/allListsIcon-03.png");

export default TabNavigator(
  {
    NewList: {
      screen: NewListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.tabbarIcon, { tintColor }]}
            source={newListIcon}
          />
        )
      }
    },
    AllLists: {
      screen: AllListsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.tabbarIcon, { tintColor }]}
            source={allListsIcon}
          />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: "#FA7D7D",
      inactiveTintColor: "#CECDCD",
      style: {
        backgroundColor: "white",
        paddingBottom: 2
      },
      labelStyle: {
        fontSize: 10
      }
    }
  }
);
