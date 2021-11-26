import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView, ImageBackground } from "react-native";
import { Button, Text, IconButton } from "react-native-paper";

const FrontScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View>
          <IconButton
            color="#D60265"
            size={30}
            icon="face-profile"
            style={{ justifyContent: "flex-end", alignItems: "flex-start" }}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text>USER NAME</Text>
          <Text>CURRENT LOCATION IF USER ALLOW</Text>
        </View>
        <View>
          <IconButton
            style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
            color="#D60265"
            size={30}
            icon="cart"
          />
        </View>
      </View>
      <View style={styles.section1}>
        <ImageBackground
          source={require("../../../Assets/foodheader.jpg")}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "flex-end",
            alignItems: "flex-start",
            opacity: 0.4,
          }}
        >
          <View style={{ paddingVertical: 10, paddingHorizontal: 5 }}>
            <Text style={{ fontSize: 20 }}>Hi USERNAME</Text>
            <Text style={{ fontSize: 16 }}>
              Boolean used to indicate whether inactive screens should be
              detached from the view hierarchy to save memory.
            </Text>
          </View>
        </ImageBackground>
        <View>
          <Text>SEARCH BAR</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default FrontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header: {
    flex: 0.1,
    width: "100%",
    backgroundColor: "#FFFFF7",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingVertical: 10,
    marginBottom: 20,
  },
  section1: {
    flex: 0.4,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
