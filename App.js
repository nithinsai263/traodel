import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TextInput,
  Dimensions,
  ScrollView,
  Pressable,
  StatusBar,
  Image,
  Switch,
} from "react-native";
const windowHeight = Dimensions.get("window").height;

export default function Page() {
  const [checked, setChecked] = useState("first");
  return (
    <SafeAreaView style={styles.page5container}>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Wallet Balance:{" "}
          </Text>
          <Text style={{ color: "green", fontSize: 16 }}>10000</Text>
        </View>
      </View>
      <View></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    marginTop:
      Platform.OS === "android"
        ? StatusBar.currentHeight
        : StatusBar.currentHeight,
    overflow: "hidden",
    margin: 10,
  },
});
