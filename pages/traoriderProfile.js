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
import Box from "./assets/bg.png";

const windowHeight = Dimensions.get("window").height;
const list = [
  {
    title: "User Verification",
  },
  {
    title: "Settings",
  },
  {
    title: "BankDetails",
  },
  {
    title: "Pricing List",
  },
  {
    title: "Terms and Condition",
  },
  {
    title: "Help and Support",
  },
  {
    title: "Rate us",
  },
  {
    title: "About",
  },
  {
    title: "Logout",
  },
];
export default function Page() {
  return (
    <SafeAreaView style={styles.page5container}>
      <ScrollView>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#EEE",
            height: 220,
          }}
        >
          <Image
            source={Box}
            style={{ height: 100, width: 100, borderRadius: 50 }}
          />
          <Text style={{ color: "green", opacity: 0.5, marginTop: 3 }}>
            KYC Verified
          </Text>
          <Text
            style={{
              color: "#555",
              fontWeight: "100",
              fontSize: 16,
              marginTop: 5,
            }}
          >
            Jagruth H.
          </Text>
          <Text
            style={{
              color: "#555",
              fontWeight: "100",
              fontSize: 16,
              marginTop: 5,
            }}
          >
            +918686869597
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          {list.map((l) => (
            <View
              style={{
                height: 60,
                borderBottomWidth: 1,
                borderBottomColor: "#EEE",
                flexDirection: "row",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Image
                source={Box}
                style={{ height: 10, width: 10, resizemode: "contain" }}
              />
              <Text style={{ marginLeft: 10 }}>{l.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    overflow: "hidden",
  },
});
