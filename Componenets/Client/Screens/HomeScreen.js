import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../UseableComponenets/CustomDrawer";
import Signin from "../Registration/Signin";
import Signup from "../Registration/Signup";
import FrontScreen from "./FrontScreen";
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Signin" component={Signin} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Home" component={FrontScreen} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
