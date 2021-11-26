import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import SearchBarComp from "../../UseableComponenets/SearchBarComp";
import HeaderComp from "../../UseableComponenets/HeaderComp";
import SectionComp from "../../UseableComponenets/SectionComp";

const FrontScreen = () => {
  let url = require("../../../Assets/foodheader.jpg");
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComp
        appBarHeader={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
        }}
        IstAction={{ justifyContent: "flex-start" }}
        userName="MAAZ"
        userLocation="MAZLIR KARACHI"
        AppbarContentColor="black"
        AppbarContent={{ justifyContent: "center", alignItems: "center" }}
        titleStyle={{
          fontSize: 20,
          fontWeight: "800",
          textAlign: "center",
        }}
        subTitleStyle={{ fontSize: 16, textAlign: "center" }}
        SecondAction={{ justifyContent: "flex-end" }}
        IstActionIcon="face-profile"
        IstActionFunction={() => console.log("Searching")}
        IstActioncolor="red"
        IstActionsize={30}
        SecondActionIcon="cart"
        SecondActionFunction={() => console.log("Searching")}
        SecondActioncolor="red"
        SecondActionsize={30}
      />

      <ScrollView style={{ flex: 1 }}>
        <View style={styles.IstSection}>
          <SectionComp
            container={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-end",
            }}
            imageUrl={url}
            imageStyle={{
              position: "relative",
              width: "100%",
              height: "100%",
              justifyContent: "flex-end",
              alignItems: "flex-start",
            }}
            Overlay={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
            innerText={{
              zIndex: 9999,
              color: "white",
              fontSize: 22,
              paddingHorizontal: 8,
              paddingBottom: 3,
            }}
            TextValue="MAAZ"
            innersubText={{
              fontSize: 16,
              color: "white",
              zIndex: 9999,
              paddingHorizontal: 8,
              paddingBottom: 5,
            }}
            subText="Add anything you want inside the overlay, and place it where you want. In this example we add text in the middle of the page:"
          />
        </View>
        <View>
          <SearchBarComp
            width="100%"
            height={50}
            icon="magnify"
            iconColor="#D60265"
          />
        </View>
        <View></View>
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default FrontScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  IstSection: {
    width: "100%",
    height: 200,
  },
});
