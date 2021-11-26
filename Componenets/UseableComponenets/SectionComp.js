import React from "react";
import { ImageBackground, View } from "react-native";
import { Surface, Text } from "react-native-paper";

const SectionComp = (props) => {
  const {
    container,
    imageUrl,
    imageStyle,
    Overlay,
    innerText,
    TextValue,
    innersubText,
    subText,
  } = props;
  return (
    <Surface style={container}>
      <ImageBackground source={imageUrl} style={imageStyle} resizeMode="cover">
        <View style={Overlay}></View>
        <Text style={innerText}>{TextValue}</Text>
        <Text style={innersubText}>{subText}</Text>
      </ImageBackground>
    </Surface>
  );
};
export default SectionComp;
