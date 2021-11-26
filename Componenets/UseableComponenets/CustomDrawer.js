import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
const CustomDrawer = (data) => {
  return (
    <View style={styles.container}>
      <View style={styles.upperPart}>
        <DrawerContentScrollView {...data}>
          {/* <DrawerItem /> */}
        <Text>MAAZ A</Text>
        </DrawerContentScrollView>
      </View>
      <View style={styles.lowerPart}>
        <Text>MAAZ B</Text>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  upperPart: {
    flex: 0.6,
    width: "100%",
    backgroundColor: "yellow",
  },
  lowerPart: {
    flex: 0.4,
    width: "100%",
    backgroundColor: "black",
  },
});
