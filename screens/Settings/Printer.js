import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  Button,
} from "react-native";

import tw from "../../lib/tailwind";
import { BackHandlerPrinter } from "../../component/profileMerchant/BackHandler";
import { PrinterSheet } from "../../component/profileMerchant/BottomSheet";

const MemoizePrinterSheet = React.memo(({ printerRef, componentId }) => {
  return <PrinterSheet printerRef={printerRef} componentId={componentId} />;
});

const Printer = ({ componentId }) => {
  const printerRef = React.useRef(null);
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView contentContainerStyle={tw`pb-32  h-full`}>
        <View style={tw`p-2`}></View>
      </ScrollView>
      <MemoizePrinterSheet printerRef={printerRef} componentId={componentId} />
      <BackHandlerPrinter componentId={componentId} printerRef={printerRef} />
    </View>
  );
};

Printer.options = {
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

export default Printer;
