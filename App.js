// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "./Componenets/Client/Registration/Signin";
import Signup from "./Componenets/Client/Registration/Signup";
import HomeScreen from "./Componenets/Client/Screens/HomeScreen";
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </PaperProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: ,
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
