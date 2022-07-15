import React from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { BackHandlerConfirmPin } from "../../component/auth/BackHandler";
import { ResendCode } from "../../lib/listSvg";
import tw from "../../lib/tailwind";

const ConfirmPin = ({ componentId }) => {
  const sheetRef = React.useRef(null);
  return (
    <View style={tw`mt-13 w-full h-full pb-32 bg-white`}>
      <View style={tw`flex-col items-center justify-center mt-8`}>
        <Text style={tw`text-xl font-bold text-gray-800`}>OTP</Text>
        <Text style={tw`text-base text-gray-800 my-2`}>
          Masukkan kode OTP yang dikirim ke
        </Text>
        <Text style={tw`text-sm text-myellow`}>2992483209290432</Text>
        <Text style={tw`text-sm my-2 text-gray-800`}>02:00</Text>
        <View style={tw`flex-row items-center my-8`}>
          <View style={tw`bg-myellow w-2 h-2 rounded-full mx-2 `} />
          <View style={tw`bg-myellow w-2 h-2 rounded-full mx-2 `} />
          <View style={tw`bg-myellow w-2 h-2 rounded-full mx-2 `} />
          <View style={tw`bg-myellow w-2 h-2 rounded-full mx-2 `} />
          <View style={tw`bg-myellow w-2 h-2 rounded-full mx-2 `} />
          <View style={tw`bg-myellow w-2 h-2 rounded-full mx-2 `} />
        </View>
        <TextInput keyboardType="number-pad" autoFocus />

        <Text style={tw`text-base text-gray-800 my-2`}>
          Tidak menerima kode?
        </Text>
        <ResendCode />
      </View>
      <BackHandlerConfirmPin componentId={componentId} />
    </View>
  );
};

ConfirmPin.options = {
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

export default ConfirmPin;
