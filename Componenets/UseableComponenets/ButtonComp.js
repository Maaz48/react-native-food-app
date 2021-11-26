import React from "react";
import { Button, Text } from "react-native-paper";
const ButtonComp = (props) => {
  const { mode, dark, color, textClr, text, pv, textSize, textWght, onPress } =
    props;
  return (
    <Button
      dark={dark}
      color={color}
      // loading={true}
      mode={mode}
      style={{ paddingVertical: pv }}
      onPress={onPress}
    >
      <Text
        style={{ color: textClr, fontSize: textSize, fontWeight: textWght }}
      >
        {text}
      </Text>
    </Button>
  );
};

export default ButtonComp;
