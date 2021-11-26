import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
const HeaderComp = (props) => {
  const {
    appBarHeader,
    IstAction,
    IstActionIcon,
    IstActionFunction,
    IstActioncolor,
    IstActionsize,
    AppbarContent,
    AppbarContentColor,
    userName,
    userLocation,
    titleStyle,
    subTitleStyle,
    SecondAction,
    SecondActionIcon,
    SecondActionFunction,
    SecondActioncolor,
    SecondActionsize,
  } = props;

  return (
    <View>
      <Appbar.Header style={appBarHeader}>
        <View style={IstAction}>
          <Appbar.Action
            icon={IstActionIcon}
            onPress={IstActionFunction}
            color={IstActioncolor}
            size={IstActionsize}
          />
        </View>
        <View style={AppbarContent}>
          <Appbar.Content
            title={userName}
            subtitle={userLocation}
            color={AppbarContentColor}
            titleStyle={titleStyle}
            subtitleStyle={subTitleStyle}
          />
        </View>
        <View style={SecondAction}>
          <Appbar.Action
            icon={SecondActionIcon}
            onPress={SecondActionFunction}
            color={SecondActioncolor}
            size={SecondActionsize}
          />
        </View>
      </Appbar.Header>
    </View>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({});
