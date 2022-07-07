import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import DefaultBackHandlerComponent from "../../component/defaultBackHandler";
import tw from "../../lib/tailwind";

import { LogoutSheet } from "../../component/setting/SettingSheet";

import SettingMenu from "../../component/setting/SettingMenu";

import { BackHandlerSetting } from "../../component/setting/BackHandler";

const MemoizeBackHandlerSetting = React.memo(({ componentId }) => {
  return <BackHandlerSetting componentId={componentId} />;
});

const MemoizeSettingMenu = React.memo(({ componentId, logoutRef }) => {
  return <SettingMenu componentId={componentId} logoutRef={logoutRef} />;
});

const MemoizeLogoutSheet = React.memo(({ logoutRef }) => {
  return <LogoutSheet logoutRef={logoutRef} />;
});

const Setting = ({ componentId }) => {
  const logoutRef = React.useRef(null);
  return (
    <View style={tw`w-full h-full bg-mgray pt-13`}>
      <ScrollView contentContainerStyle={tw`pb-32 `}>
        <MemoizeSettingMenu componentId={componentId} logoutRef={logoutRef} />
      </ScrollView>
      <MemoizeLogoutSheet logoutRef={logoutRef} />
      <MemoizeBackHandlerSetting componentId={componentId} />
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

export default Setting;
