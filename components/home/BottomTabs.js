import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: "https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/home1600.png",
    inactive:
      "https://th.bing.com/th/id/OIP.qN87xwPeUugSiWcw6QS6zAHaF5?w=206&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    name: "Search",
    active: "https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/home1600.png",
    inactive:
      "https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/home1600.png",
  },
  {
    name: "Reels",
    active: "https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/home1600.png",
    inactive:
      "https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/home1600.png",
  },
  {
    name: "Shop",
    active: "https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/home1600.png",
    inactive:
      "https://maxcdn.icons8.com/Share/icon/p1em/Very_Basic/home1600.png",
  },
  {
    name: "Profile",
    active:
      "https://th.bing.com/th/id/OIP.qN87xwPeUugSiWcw6QS6zAHaF5?w=206&h=180&c=7&r=0&o=5&pid=1.7",
    inactive:
      "https://th.bing.com/th/id/OIP.qN87xwPeUugSiWcw6QS6zAHaF5?w=206&h=180&c=7&r=0&o=5&pid=1.7",
  },
];
const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  //   {console.log(icons)}
  const Icon = ({ icon }) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={{ uri: activeTab == icon.name ? icon.active : icon.inactive }}
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null,
          activeTab === "Profile" && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};
export default BottomTabs;
const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    paddingBottom: 5,
    marginBottom: 10,
    // top: 565,
    top: Dimensions.get("window").height - 80,
    width: "100%",
    zIndex: 999,
    backgroundColor: "#fff",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 80,
    padding: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
  profilePic: (activeTab = "") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});
