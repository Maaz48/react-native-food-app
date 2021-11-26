import React from "react";
import { TextInput } from "react-native-paper";

const InputComp = (props) => {
  const {
    label,
    value,
    onChangeText,
    mode,
    selectionColor,
    underlineColor,
    activeUnderlineColor,
    outlineColor,
    activeOutlineColor,
    pv,
    ph,
    mv,
    mh,
    width,
    mr,
    ml,
    mt,
    mb,
    secureTextEntry,
  } = props;
  return (
    <TextInput
      label={label}
      value={value}
      onChangeText={onChangeText}
      mode={mode}
      selectionColor={selectionColor}
      underlineColor={underlineColor}
      activeUnderlineColor={activeUnderlineColor}
      outlineColor={outlineColor}
      activeOutlineColor={activeOutlineColor}
      secureTextEntry={secureTextEntry}
      style={{
        paddingHorizontal: ph,
        paddingVertical: pv,
        marginHorizontal: mh,
        marginVertical: mv,
        width: width,
        marginRight: mr,
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        height: 50,
      }}
    />
  );
};

export default InputComp;
