import React from "react";

import { View, ScrollView, StatusBar } from "react-native";
import { BackHandlerPrivilage } from "../../component/profileMerchant/BackHandler";
import tw from "../../lib/tailwind";
import Privilage from "../../component/profileMerchant/Privilage/UserList";
import Header from "../../component/profileMerchant/Privilage/Header";
const PrivilageScreen = ({ componentId }) => {
  return (
    <View style={tw`pt-10 w-full h-full pb-32 bg-white`}>
      <Header componentId={componentId} />
      <ScrollView
        contentContainerStyle={tw`pb-12 bg-white`}
        horizontal={false}
        scrollEnabled={true}
      >
        <Privilage />
      </ScrollView>
      <BackHandlerPrivilage componentId={componentId} />
    </View>
  );
};

PrivilageScreen.options = {
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

export default PrivilageScreen;
