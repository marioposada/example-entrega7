import { StyleSheet, Text, View } from "react-native";

import ImageDetail from "../components/ImageDetail";
import React from "react";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={2}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={5}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
