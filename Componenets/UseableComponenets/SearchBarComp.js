import React from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchBarComp = (props) => {
  const { width, height, icon, iconColor } = props;
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.searchbar}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{ width: width, height: height }}
        icon={icon}
        iconColor={iconColor}
      />
    </View>
  );
};

export default SearchBarComp;
const styles = StyleSheet.create({});
