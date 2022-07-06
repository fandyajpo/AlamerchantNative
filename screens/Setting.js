import React from "react";
import { View, Text, ScrollView } from "react-native";
import BackHandlerComponent from "../component/setting/BackHandler";
import tw from "../lib/tailwind";
import { Navigation } from "react-native-navigation";

const Setting = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-mgray pt-13`}>
      <ScrollView contentContainerStyle={tw`pb-32`}>
        <View style={tw`bg-white w-full h-20 border-b border-gray-300`}></View>
        <View style={tw`bg-white w-full h-20 border-b border-gray-300`}></View>
        <View style={tw`bg-white w-full h-20 border-b border-gray-300`}></View>
      </ScrollView>
      <BackHandlerComponent componentId={componentId} />
    </View>
  );
};

Setting.options = {
  bottomTabs: {
    visible: false,
    drawBehind: false,
    animate: false,
  },
  topBar: {
    visible: false,
    backButton: {
      visible: false,
    },
  },
  statusBar: {
    drawBehind: true,
    translucent: true,
    style: "dark",
    backgroundColor: "transparent",
  },
  animations: {
    push: {
      waitForRender: true,
      content: {
        translationX: {
          from: require("react-native").Dimensions.get("window").width,
          to: 0,
          duration: 200,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        translationX: {
          from: 0,
          to: require("react-native").Dimensions.get("window").width,
          duration: 200,
        },
      },
    },
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: true,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
  },
};

export default Setting;
