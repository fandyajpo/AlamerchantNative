import React from "react";
import { View, Image, ScrollView } from "react-native";
import tw from "../../lib/tailwind";
import { LogoutSheet } from "../../component/profileMerchant/BottomSheet";
import { BackHandlerSetting } from "../../component/profileMerchant/BackHandler";
import SettingMenu from "../../component/profileMerchant/Setting/SettingMenu/";
import { Navigation } from "react-native-navigation";
const MemoizeBackHandlerSetting = React.memo(BackHandlerSetting);
const MemoizeSettingMenu = React.memo(SettingMenu);
const MemoizeLogoutSheet = React.memo(LogoutSheet);

const Setting = ({ componentId }) => {
  const logoutRef = React.useRef(null);
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentWillAppear: () =>
          console.log("berada dihalaman menunggu render"),
        componentDidAppear: () => {
          setAppIsReady(true);
          console.log(`componentDidAppear ${componentId}`);
        },
        componentDidDisappear: () => {
          setAppIsReady(false);
          console.log(`componentDidDisappear ${componentId}`);
        },
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);

  if (!appIsReady) {
    return (
      <View
        style={tw`w-full bg-white h-full flex-row items-center justify-center`}
      >
        <Image
          source={require("../../assets/gif/alamerch.gif")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }
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
