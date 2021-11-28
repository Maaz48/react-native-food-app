import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../../UseableComponenets/CustomDrawer";
import Signin from "../Registration/Signin";
import Signup from "../Registration/Signup";
import FrontScreen from "./FrontScreen";
import Locationtrace from "../../../Locationtrace";
const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
      // drawerContent={(props)=>{<CustomDrawer {...props}/>}}
    >
      <Drawer.Screen name="Signin" component={Signin} />
      <Drawer.Screen name="Signup" component={Signup} />
      <Drawer.Screen name="Home" component={FrontScreen} />
      <Drawer.Screen name="Locationtrace" component={Locationtrace} />
    </Drawer.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
