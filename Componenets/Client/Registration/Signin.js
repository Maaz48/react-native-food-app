import React from "react";
import { StyleSheet, View, ScrollView, StatusBar, Alert } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import ButtonComp from "../../UseableComponenets/ButtonComp";
import InputComp from "../../UseableComponenets/InputComp";
import LogoComp from "../../UseableComponenets/LogoComp";
import {
  auth,
  signInWithEmailAndPassword,
} from "../../../FirebaseConfig/Firebase";
const Signin = ({ navigation }) => {
  //////////BUTTON PROPS RANDON //////////////
  let buttonMode = "contained";
  let autodark = true;
  let backgroundColor = "white";
  let textClr = "#D60265";
  let text = "LOG IN";
  let paddingvertical = 6;
  ////////// END BUTTON PROPS RANDON //////////////

  //////////  INPUT Email PROPS RANDON //////////////
  const [email, setemail] = React.useState("");
  let emaillabel = "Email";
  let getEmailvalue = (text) => setemail(text);
  let mode = "flat";
  let selectionColor = "black";
  let underlineColor = "#D60265";
  let activeUnderlineColor = "#D60265";
  let outlineColor = "#D60265";
  let activeOutlineColor = "black";
  ////////// END INPUT Email RANDON //////////////

  //////////  INPUT Password PROPS RANDON //////////////
  const [password, setpassword] = React.useState("");
  let passwordlabel = "Password";
  let getpasswordvalue = (text) => setpassword(text);
  ////////// END password Email RANDON //////////////

  ////////// SIgn in existing account //////////////

  function goToHome() {
    navigation.navigate("HomeScreen");
  }

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        Alert.alert("SUCESS", "WELCOME TO FOOD PANDA", [
          {
            onPress: () => {
              goToHome();
            },
            text: "OK",
          },
        ]);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert("ERROR", errorMessage);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <View style={styles.upperpart}>
          <LogoComp width={100} height={100} />
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontSize: 23,
                fontWeight: "bold",
              }}
            >
              WELCOME TO
            </Text>
            <Text
              style={{
                color: "black",
                fontSize: 23,
                fontWeight: "bold",
                marginHorizontal: 10,
              }}
            >
              FOOD
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 23,
                fontWeight: "bold",
              }}
            >
              PANDA
            </Text>
          </View>
        </View>
        <View style={styles.lowerpart}>
          <View style={styles.inputFields}>
            <InputComp
              label={emaillabel}
              value={email}
              onChangeText={getEmailvalue}
              mode={mode}
              selectionColor={selectionColor}
              underlineColor={underlineColor}
              activeUnderlineColor={activeUnderlineColor}
              outlineColor={outlineColor}
              activeOutlineColor={activeOutlineColor}
              mh={0}
              mv={0}
              mh={0}
              mh={0}
            />
            <InputComp
              label={passwordlabel}
              value={password}
              onChangeText={getpasswordvalue}
              mode={mode}
              selectionColor={selectionColor}
              underlineColor={underlineColor}
              activeUnderlineColor={activeUnderlineColor}
              outlineColor={outlineColor}
              activeOutlineColor={activeOutlineColor}
              mh={0}
              mv={10}
              mh={0}
              mh={0}
              secureTextEntry={true}
            />
            <ButtonComp
              mode={buttonMode}
              dark={autodark}
              color={backgroundColor}
              textClr={textClr}
              text={text}
              pv={paddingvertical}
              textSize={18}
              textWght="700"
              onPress={signin}
            />
          </View>
          <View style={{ marginVertical: 10 }}>
            <ButtonComp
              dark={autodark}
              // color={backgroundColor}
              textClr="white"
              text="Have not account yet ??"
              // pv={paddingvertical}
              textSize={16}
              textWght="600"
              mode="text"
            />
            <ButtonComp
              dark={autodark}
              // color={backgroundColor}
              textClr="white"
              text="Sign up"
              // pv={paddingvertical}
              textSize={16}
              textWght="600"
              mode="text"
              onPress={() => navigation.navigate("Signup")}
            />
          </View>
        </View>
        <StatusBar backgroundColor="#D60265" barStyle="light-content" />
      </View>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#D60265",
  },
  upperpart: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 10,
  },
  lowerpart: {
    // height: 300,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputFields: {
    paddingHorizontal: 10,
    width: "100%",
    // height: 300,
  },
});
