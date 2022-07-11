import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "../../lib/tailwind";
import { LogoutSheet } from "../../component/profileMerchant/BottomSheet";
import { BackHandlerSetting } from "../../component/profileMerchant/BackHandler";
import SettingMenu from "../../component/profileMerchant/Setting/SettingMenu/";

const MemoizeBackHandlerSetting = React.memo(BackHandlerSetting);
const MemoizeSettingMenu = React.memo(SettingMenu);
const MemoizeLogoutSheet = React.memo(LogoutSheet);

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
