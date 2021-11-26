import React from "react";
import { Image } from "react-native";

const LogoComp = (props) => {
  const { width, height } = props;
  return (
    <Image
      source={require("../../Assets/foodpanda.png")}
      style={{ width: width, height: height }}
    />
  );
};

export default LogoComp;
