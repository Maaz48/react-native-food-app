import React from "react";
import { Button, Text } from "react-native-paper";
const ButtonComp = (props) => {
  const { mode, dark, color, textClr, text, pv, textSize, textWght, onPress, btnicon,rowreverse,ButtonStyle } =
    props;
  
  return (
    <Button
      dark={dark}
      color={color}
      // loading={true}
      mode={mode}
      // { paddingVertical: pv,backgroundColor:{btnBgColor} }
      style={ButtonStyle}
      onPress={onPress}
      icon={btnicon}
      contentStyle={{
        flexDirection: rowreverse,
      }
      }
      compact={false}
      
    >
      <Text
        style={{ color: textClr, fontSize: textSize, fontWeight: textWght }}
      >
        {text}
      </Text>
    </Button >
  );
};

export default ButtonComp;
