import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 30
  },

  // new list screen

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  // new list button

  newListButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20
  },

  //list item

  item: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingTop: 10,
    borderBottomColor: "#CECDCD",
    borderBottomWidth: 2
  },
  itemText: {
    fontSize: 30,
    color: "#848282"
  },
  complete: {
    textDecorationLine: "line-through",
    textDecorationColor: "#FA7D7D"
  },
  itemList: {
    width: "100%"
  },

  // item input

  itemInput: {
    fontSize: 30,
    color: "#CECDCD",
    paddingBottom: 10,
    color: "#FA7D7D",
    flex: 1
  },
  specialTextInputContainer: {
    flexDirection: "row",
    width: "100%",
    borderBottomColor: "#CECDCD",
    borderBottomWidth: 2
  }
});

export default styles;
