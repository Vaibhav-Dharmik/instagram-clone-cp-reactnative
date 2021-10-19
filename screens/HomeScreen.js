import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import BottomTabs, { bottomTabIcons } from "../components/home/BottomTabs";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { POST } from "../data/post";

const HomeScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="black" />
      <SafeAreaView style={styles.container}>
        <Header />
        <Stories />
        <ScrollView>
          {POST.map((post, index) => (
            <Post post={post} key={index} />
          ))}
          <Footer />
        </ScrollView>
        <BottomTabs icons={bottomTabIcons} />
      </SafeAreaView>
    </>
  );
};

//  Used on for Spacing
const Footer = () => (
  <View style={{ height: 200, width: 100 }}>
    {/* <Text>Hello From Footer</Text> */}
  </View>
);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    // marginTop: 5,
    marginBottom: 50,
    // bottom: 50,
  },
});
