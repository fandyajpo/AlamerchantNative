import React from "react";
import { View, Text, TextInput } from "react-native";
import tw from "../../../lib/tailwind";

const DiskonMenu = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white`}>
      <Text style={tw`text-gray-800 font-bold text-sm`}>Persentase Diskon</Text>
      <Text style={tw`text-gray-300  text-sm mb-2`}>
        Harga awal akan dipotong harga dengan persentase.
      </Text>
      <TextInput style={tw`bg-mgray border border-gray-300 rounded-md h-10`} />
      <View style={tw`bg-mgray w-full h-2 my-2`} />
      <Text style={tw`text-gray-800 font-bold text-sm`}>Persentase Diskon</Text>
    </View>
  );
};

DiskonMenu.options = {
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

export default DiskonMenu;
