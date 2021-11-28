import React from "react";
import { StyleSheet, View, ScrollView, StatusBar, Alert } from "react-native";
import { Button, Text, TextInput, Snackbar } from "react-native-paper";
import ButtonComp from "../../UseableComponenets/ButtonComp";
import InputComp from "../../UseableComponenets/InputComp";
import LogoComp from "../../UseableComponenets/LogoComp";

import {
  auth,
  createUserWithEmailAndPassword,
  db,
  addDoc,
  collection,
} from "../../../FirebaseConfig/Firebase";
const Signup = ({ navigation }) => {
  //////////BUTTON PROPS RANDON //////////////
  let buttonMode = "contained";
  let autodark = true;
  let backgroundColor = "white";
  let textClr = "#D60265";
  let text = "SIGN UP";
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

  //////////////////////FIRST NAME AND LAST NAME /////////////////////
  const [fname, setfname] = React.useState("");
  let getFnamevalue = (text) => {
    setfname(text);
  };
  const [lname, setlname] = React.useState("");
  let getLnamevalue = (text) => setlname(text);

  //////////////////////FIRST NAME AND LAST NAME END /////////////////////
  ///////////////////// TOAST ////////////////////

  ////////////////// FIREBASE CONFIG ////////////////////////
  function goToHome() {
    navigation.navigate("HomeScreen");
  }
  const signUpNewUser = () => {
    if (fname === "" || lname === "" || email === "" || password === "") {
      Alert.alert("ERROR", "Please fill all the fields");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          const Emailuid = user.uid;
          try {
            const docRef = await addDoc(collection(db, "Resgistration"), {
              fname,
              lname,
              email,
              Emailuid,
            });
            console.log("Document written with ID: ", docRef.id);
            Alert.alert("WELCOME", "Hi Welcome To Food Panda", [
              {
                onPress: () => {
                  goToHome();
                },
                text: "OK",
              },
            ]);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          Alert.alert("ERROR", errorMessage);

          // ..
        });
    }
  };

  ////////////////// FIREBASE CONFIG END ////////////////////////

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
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                marginVertical: 10,
                justifyContent: "space-between",
              }}
            >
              <InputComp
                label="First Name"
                value={fname}
                onChangeText={getFnamevalue}
                mode={mode}
                selectionColor={selectionColor}
                underlineColor={underlineColor}
                activeUnderlineColor={activeUnderlineColor}
                outlineColor={outlineColor}
                activeOutlineColor={activeOutlineColor}
                mr={3}
                width="48%"
              />
              <InputComp
                width="48%"
                label="Last Name"
                value={lname}
                onChangeText={getLnamevalue}
                mode={mode}
                selectionColor={selectionColor}
                underlineColor={underlineColor}
                activeUnderlineColor={activeUnderlineColor}
                outlineColor={outlineColor}
                activeOutlineColor={activeOutlineColor}
                ml={3}
              />
            </View>
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
              pv={0}
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
              mv={10}
              pv={0}
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
              onPress={signUpNewUser}
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
              pv={0}
            />
            <ButtonComp
              dark={autodark}
              // color={backgroundColor}
              textClr="white"
              text="Sign in"
              // pv={paddingvertical}
              textSize={16}
              textWght="600"
              mode="text"
              onPress={() => {
                navigation.navigate("Signin");
              }}
            />
          </View>
        </View>
        <StatusBar backgroundColor="#D60265" barStyle="light-content" />
      </View>
    </ScrollView>
  );
};

export default Signup;

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
