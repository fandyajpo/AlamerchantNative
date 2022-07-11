import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "../../lib/tailwind";

import SettingMenu from "../../component/profileMerchant/Setting/SettingMenu/";

const MemoizeSettingMenu = React.memo(({ componentId, logoutRef }) => {
  return <SettingMenu componentId={componentId} logoutRef={logoutRef} />;
});

const Member = ({ componentId }) => {
  const logoutRef = React.useRef(null);
  return (
    <View style={tw`w-full h-full bg-mgray pt-13`}>
      <ScrollView contentContainerStyle={tw`pb-32 `}>
        <MemoizeSettingMenu componentId={componentId} logoutRef={logoutRef} />
      </ScrollView>
    </View>
  );
};

Member.options = {
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
          duration: 100,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        translationX: {
          from: 0,
          to: require("react-native").Dimensions.get("window").width,
          duration: 100,
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

export default Member;
