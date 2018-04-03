import React from "react";
import { Text, View, FlatList, TextInput, Image } from "react-native";
import { TabNavigator } from "react-navigation";
import styles from "./Styles";

import NewListScreen from "./NewListScreen";
import AllListsScreen from "./AllListsScreen";
import TestLinks from "./testlinks";
import TestRechts from "./testrechts";

export const newListIcon = require("./img/newListIcon2-02.png");
export const allListsIcon = require("./img/allListsIcon-03.png");

// export default TabNavigator
const NewListOldItemNavigator = TabNavigator(
  {
    links: {
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
    rechts: {
      screen: TestRechts,
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
    tabBarPosition: "top",
    animationEnabled: true,
    swipeEnabled: true,

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

const MainTabNavigator = TabNavigator(
  {
    NewList: {
      screen: NewListOldItemNavigator,
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

export default MainTabNavigator;
