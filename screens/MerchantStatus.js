import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { GlobalContext } from "../lib/ctx";
import tw from "twrnc";
import Header from "../component/merchantStatus/Header";
import BackHandlerComponent from "../component/merchantStatus/BackHandler";
import Status from "../component/merchantStatus/StatusList";
import { Navigation } from "react-native-navigation";
const MerchantStatus = ({ componentId }) => {
  const { state, fnr, setSecure, getSecure, logGer } =
    React.useContext(GlobalContext);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () =>
          Promise.all([fnr({ type: "screen", payload: "home" })]),
        componentDidDisappear: () =>
          console.log(`componentDidDisappear ${componentId}`),
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header />
      <View style={tw`m-2`}>
        <Status />
      </View>
      <BackHandlerComponent componentId={componentId} />
    </View>
  );
};

MerchantStatus.options = {
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

export default MerchantStatus;
