import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider } from "react-native-elements";
import {
  ChatIcon,
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "react-native-heroicons/outline";
import * as HeroIcons from "react-native-heroicons/outline";
import { Icon as IconE } from "react-native-elements";
import { POST } from "../../data/post";
import { BookmarkIcon } from "react-native-heroicons/outline";

{
  // const Post = () => {
  //   return (
  //     <View>
  //       <Divider style={{ color: "white" }} />
  //       <View style={styles.postHeader}>
  //         {console.log(POST[0])}
  //         <View style={styles.postHeader_user}>
  //           <Image
  //             source={{ uri: POST[0].profile_picture }}
  //             style={styles.postHeader_userImage}
  //           />
  //           <Text style={styles.postHeader_userText}>{POST[0].user}</Text>
  //         </View>
  //         {/* <Text style={{ color: "white" }}>hello</Text> */}
  //         <Text style={styles.postHeader_text}>...</Text>
  //       </View>
  //       <Text style={{ color: "white" }}>Hello From Post</Text>
  //     </View>
  //   );
  // };
  // export default Post;
  // const styles = StyleSheet.create({
  //   postHeader: {
  //     flexDirection: "row",
  //     justifyContent: "space-between",
  //     color: "white",
  //     marginHorizontal: 5,
  //     marginTop: 15,
  //   },
  //   postHeader_user: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //   },
  //   postHeader_userImage: {
  //     width: 30,
  //     height: 30,
  //     borderRadius: 50,
  //   },
  //   postHeader_userText: {
  //     color: "white",
  //     fontSize: 15,
  //     fontWeight: "600",
  //     left: 10,
  //   },
  //   postHeader_text: {
  //     color: "white",
  //     fontSize: 20,
  //     fontWeight: "bold",
  //   },
  // });
}
const postFooterIcons = [
  { name: "Like", imageUrl: "", likedImageUrl: "" },
  { name: "Comment", imageUrl: "", likedImageUrl: "" },
  { name: "Share", imageUrl: "", likedImageUrl: "" },
  { name: "Save", imageUrl: "", likedImageUrl: "" },
];
const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Divider style={{ color: "white" }} width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
          {post.user}
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity>
      {/* <Text style={{ color: "white", fontWeight: "700", right: 10 }}>...</Text> */}
      <DotsHorizontalIcon style={{ color: "white", right: 10 }} />
    </TouchableOpacity>
  </View>
);

const PostImage = ({ post }) => (
  <View style={{ width: "100%", height: 250 }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterContainer}>
      {/* <Icon
        imgStyle={styles.footerIcon}
        imageUrl={postFooterIcons[0].imageUrl}
      /> */}

      <TouchableOpacity>
        <HeartIcon style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <ChatIcon style={styles.footerIcon} />
      </TouchableOpacity>

      <TouchableOpacity>
        <PaperAirplaneIcon style={[styles.footerIcon, styles.shareIcon]} />
      </TouchableOpacity>
    </View>
    <View style={{ flex: 1, alignItems: "flex-end" }}>
      <TouchableOpacity>
        <BookmarkIcon style={styles.footerIcon} />
      </TouchableOpacity>
    </View>
  </View>
);

const Icon = (imgStyle, imgUrl) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);
const Caption = ({ post }) => (
  <Text style={{ color: "white" }}>
    <Text style={{ fontWeight: "700" }}>{post.user} </Text>
    <Text style={{}}>{post.caption}</Text>
  </Text>
);

const CommentsSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && (
      <Text style={{ color: "gray" }}>
        View {post.comments.length > 1 ? "all" : ""} {post.comments.length}
        {"  "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);
const Comments = ({ post }) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "700" }}>{comment.user}</Text>{" "}
          {comment.comment}
        </Text>
      </View>
    ))}
  </>
);
export default Post;

const styles = StyleSheet.create({
  story: {
    height: 35,
    width: 35,
    marginLeft: 6,
    borderRadius: 50,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
    color: "white",
  },
  shareIcon: {
    transform: [{ rotate: "48deg" }],
    marginTop: -2,
  },
  leftFooterContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
});
