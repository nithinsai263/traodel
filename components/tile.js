import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Tile({ image, text1, text2 }) {
  return (
    <View style={styles.tile}>
      <Image source={image} style={{ height: 30, width: 30 }} />
      <View>
        <Text style={{ textAlign: "center" }}>{text1}</Text>
        <Text>{text2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tile: {
    overflow: "hidden",
    height: 80,
    width: 110,
    backgroundColor: "#eee",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },
});
