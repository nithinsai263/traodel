import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Shop from "../assets/shop.png";
export default function RunningOrder() {
  return (
    <View
      style={{
        marginTop: 20,
        height: 70,
        backgroundColor: "#EEE",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={Shop} style={styles.icon} />
        <Text style={{ marginLeft: 3 }}>kfjk</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={Shop} style={styles.icon} />
        <Text style={{ marginLeft: 3 }}>kfjk</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={Shop} style={styles.icon} />
        <Text style={{ marginLeft: 3 }}>kfjk</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
});
