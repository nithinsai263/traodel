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
import Tile from "./components/tile";
import Box from "./assets/box.png";
import Shop from "./assets/shop.png";
const windowHeight = Dimensions.get("window").height;

export default function Page() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.page5container}>
      <View style={{ justifyContent: "center" }}>
        <View
          style={{
            backgroundColor: "#1AB394",
            height: 200,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              marginTop: 20,
              textAlign: "center",
            }}
          >
            TRAO DELIVERY
          </Text>
          <View
            style={{
              justifyContent: "flex-end",
              flexDirection: "row",
              marginTop: -30,
              marginRight: 10,
            }}
          >
            <Image
              source={Shop}
              style={{ height: 30, width: 30, resizeMode: "contain" }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#EEE",
            borderRadius: 10,
            width: "90%",
            height: 200,
            marginTop: -100,
            marginLeft: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={Box}
                style={{ height: 50, width: 50, borderRadius: 25 }}
              />
              <Text> Karthik Gandhi</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              margin: 30,
              marginTop: 40,
            }}
          >
            <View>
              <Text>Total Orders</Text>
              <Text style={{ textAlign: "center" }}>767s</Text>
            </View>
            <View>
              <Text>Completed</Text>
              <Text style={{ textAlign: "center" }}>767s</Text>
            </View>
            <View>
              <Text>Earned</Text>
              <Text style={{ textAlign: "center" }}>12000</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
            backgroundColor: "#EEE",
            height: 100,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 22 }}> 10 New Orders</Text>
          <Text style={{ color: "#555" }}> Waiting for you</Text>
        </View>
        <View>
          <View
            style={{
              marginTop: 50,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Tile text1="Add" text2="Boys" image={Box} />
            <Tile text1="Add" text2="Vehicles" image={Box} />
            <Tile text1="Setup" image={Box} />
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Tile text1="Manage" text2="Boys" image={Box} />
            <Tile text1="Orders" image={Box} />
            <Tile text1="Wallet" image={Box} />
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Tile text1="Manage" text2="Boys" image={Box} />
            <Tile text1="Orders" image={Box} />
            <Tile text1="Wallet" image={Box} />
          </View>
        </View>
      </View>
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
