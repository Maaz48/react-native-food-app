import React, { useState } from "react";
import { ImageBackground, View } from "react-native";
import { Surface, Text } from "react-native-paper";
import ButtonComp from "./ButtonComp";

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
    isButtonShow,
    btnText,
    btntextSize,
    btntextClr,
    btnfontWeight,
    btnicon,
    rowreverse,
    mode,
    textBodyStyle,
    ButtonStyle
  } = props;
  return (
    <Surface style={container}>
      <ImageBackground source={imageUrl} style={imageStyle} resizeMode="cover">
        <View style={Overlay}></View>
        <Text style={innerText}>{TextValue}</Text>
        <Text style={innersubText}>{subText}</Text>
        <View style={textBodyStyle}>
          {isButtonShow ? console.log("Button not show") : <ButtonComp text={btnText} textWght={btnfontWeight} textSize={btntextSize} textClr={btntextClr} btnicon={btnicon} rowreverse={rowreverse} mode={mode} ButtonStyle={ButtonStyle} />}
        </View>
      </ImageBackground>
    </Surface>
  );
};
export default SectionComp;
