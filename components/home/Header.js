import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
// import {
//   MenuIcon,
//   SearchIcon,
//   ShoppingCartIcon,
// } from "@heroicons/react/outline";
import { SparklesIcon } from "react-native-heroicons/solid";
import * as HeroIcons from "react-native-heroicons/outline";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <HeroIcons.PlusCircleIcon
            style={styles.icon}
            color="white"
            size={38}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <HeroIcons.HeartIcon style={styles.icon} color="white" size={38} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>99</Text>
          </View>
          <HeroIcons.ChatIcon style={styles.icon} color="white" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 80,
    resizeMode: "contain",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    // marginHorizontal: 30,
    width: 25,
    height: 25,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    zIndex: 40,
    backgroundColor: "#ff3250",
    position: "absolute",
    // width: "auto",
    left: 28,
    bottom: 24,
    width: 25,
    height: 20,
    borderRadius: 25,
    alignItems: "center",
  },
  unreadBadgeText: {
    // padding: 1,
    color: "white",
    fontWeight: "600",
  },
});
