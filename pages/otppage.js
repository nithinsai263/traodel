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
} from "react-native";

const windowHeight = Dimensions.get("window").height;

export default function Page() {
  return (
    <SafeAreaView style={styles.page5container}>
      <ImageBackground
        style={styles.profileimgcontainer}
        source={require("./assets/bg.png")}
      >
        <ScrollView>
          <View style={styles.page5heading}>
            <Text style={styles.page5headingotp}>VERIFY OTP</Text>
            <Text style={styles.page5headingotp2}>
              Please type the verification code sent to yout registered number
            </Text>
          </View>

          <>
            <View style={styles.page5otpcontainer}>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                maxLength={1}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                maxLength={1}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                maxLength={1}
              ></TextInput>
              <TextInput
                keyboardType="numeric"
                style={styles.textInput}
                maxLength={1}
              ></TextInput>
            </View>

            <View style={styles.page5buttoncontainer}>
              <Pressable>
                <View style={styles.page5Verifynowcontainer}>
                  <Text style={styles.page5Verifynowbutton}>Verify Now</Text>
                </View>
              </Pressable>
              <Pressable
                onPress={() => {
                  console.warn(number);
                  signIn(number);
                }}
              >
                <Text style={styles.page5Resendcodebutton}>Resend code</Text>
              </Pressable>
            </View>
          </>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page5container: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: "#0E7783",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    overflow: "hidden",
  },

  profileimgcontainer: {
    width: "100%",
    height: windowHeight,
    resizeMode: "contain",
  },
  page5heading: {
    alignItems: "center",
    marginTop: 60,
  },
  page5headingotp: {
    fontSize: 28,
    color: "#fff",
  },
  page5headingotp2: {
    fontSize: 14,
    textAlign: "center",
    color: "#FFFFFF",
    width: 250,
    marginTop: 20,
  },
  page5otpcontainer: {
    height: 200,
    justifyContent: "center",
    flexDirection: "row",
  },
  page5buttoncontainer: {
    marginTop: 100,
    alignItems: "center",
  },
  page5Verifynowcontainer: {
    width: 233,
    height: 66,
    backgroundColor: "#098D73",
    borderRadius: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  page5Verifynowbutton: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  page5Resendcodebutton: {
    color: "#000000",
    marginTop: 10,
    fontSize: 14,
    opacity: 0.66,
  },
  textInput: {
    backgroundColor: "#DDD",
    fontWeight: "600",
    alignSelf: "center",
    fontSize: 20,
    height: 55,
    width: "14.5%",
    margin: 12,
    borderRadius: 10,
    borderWidth: 0,
    borderColor: "#3C2022",
    alignItems: "center",
    textAlign: "center",
  },
});
