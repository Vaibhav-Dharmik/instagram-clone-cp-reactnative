import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  FilmIcon,
  HomeIcon,
  SearchIcon,
  ShoppingBagIcon,
} from "react-native-heroicons/solid";
import { USERS } from "../../data/users";

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <Text
        style={{
          color: "white",
          marginBottom: 10,
          //   top: -2,
          left: 10,
          fontWeight: "bold",
        }}
      >
        STORIES
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View style={styles.storyContainer} key={index}>
            <TouchableOpacity
              onPress={() => console.log("hello from storyof " + story.user)}
            >
              <Image source={{ uri: story.Image }} style={styles.storyImage} />
              <Text style={styles.storyText}>
                {story.user.length > 7
                  ? story.user.slice(0, 7).toLowerCase() + "..."
                  : story.user.toLowerCase()}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  storyContainer: {
    left: 5,
    right: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  storyImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: "#ff8501",
    borderWidth: 2,
  },
  storyText: {
    color: "white",
    textAlign: "center",
  },
});
