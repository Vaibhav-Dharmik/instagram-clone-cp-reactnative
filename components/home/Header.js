import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View>
      <Image
        style={styles.logo}
        source={require("../../assets/header-logo.png")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  logo: {
    backgroundColor: "black",
  },
});
