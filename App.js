import React from "react";
import { Text, View, FlatList, TextInput, Image } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";
import styles from "./Styles";
import firebase from "firebase";

import NewListScreen from "./NewListScreen";
import AllListsScreen from "./AllListsScreen";
import AddOldItemsScreen from "./AddOldItemsScreen";
import LoginScreen from "./LoginScreen";

export const newListIcon = require("./img/newListIcon2-02.png");
export const allListsIcon = require("./img/allListsIcon-03.png");
export const myNewListButton = require("./img/MyNewListButton-06.png");
export const addOldItemButton = require("./img/AddOldItemsButton-05.png");

const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  AllTheListScreens: { screen: NewListScreen }
});

// top TabNavigator
const NewListOldItemNavigator = TabNavigator(
  {
    links: {
      screen: NewListScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.myNewListTabbarIcon, { tintColor }]}
            source={myNewListButton}
          />
        )
      }
    },
    rechts: {
      screen: AddOldItemsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.oldItemTabbarIcon, { tintColor }]}
            source={addOldItemButton}
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
      showLabel: false,
      activeTintColor: "#FA7D7D",
      inactiveTintColor: "#CECDCD",
      style: {
        backgroundColor: "white",
        height: 90,
        paddingTop: 10
      }
    }
  }
);

// bottom main TabNavigator

const MainTabNavigator = TabNavigator(
  {
    NewList: {
      screen: NewListOldItemNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            style={[styles.mainTabbarIcon, { tintColor }]}
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
            style={[styles.mainTabbarIcon, { tintColor }]}
            source={allListsIcon}
          />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyBlB2VVgL1Kz1-Z_KW8ank8EcUCaaExN_M",
      authDomain: "ts-groceryapp.firebaseapp.com",
      databaseURL: "https://ts-groceryapp.firebaseio.com",
      projectId: "ts-groceryapp",
      storageBucket: "ts-groceryapp.appspot.com",
      messagingSenderId: "470402188338"
    };
    firebase.initializeApp(config);
  }
  render() {
    return <MainTabNavigator />;
  }
}
