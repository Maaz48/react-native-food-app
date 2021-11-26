import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as Location from "expo-location";
const Locationtrace = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocation = async () => {
    let { status } = await Location.rMp1oViPb3EdvcJ5kxoqe52RuaiK6YiUYo();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  //   useEffect(() => {
  //     (async () => {})();
  //   }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Button title="get location" onPress={getLocation} />
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );
};

export default Locationtrace;

const styles = StyleSheet.create({});
