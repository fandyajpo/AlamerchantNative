import React from "react";
import { View, Text, Pressable } from "react-native";
import { BackHandlerOtp } from "../../component/auth/BackHandler";
import { Whatsapp, Sms, Telephone } from "../../lib/listSvg";
import tw from "../../lib/tailwind";
import { PushRoute } from "../../lib/ctx";

const Otp = ({ componentId }) => {
  const sheetRef = React.useRef(null);
  return (
    <View style={tw`mt-13 w-full h-full pb-32 bg-white`}>
      <View style={tw`px-2`}>
        <Pressable
          onPress={() => PushRoute(componentId, "ConfirmPin")}
          style={tw`border border-gray-200 w-full rounded-md my-1 flex-row items-center p-2 shadow-sm bg-white`}
        >
          <Whatsapp />
          <View style={tw`ml-3`}>
            <Text style={tw`text-sm text-gray-800 font-bold`}>Whatsapp</Text>
            <Text style={tw`text-sm text-gray-800`}>
              Kirim OTP melalui Whatsapp
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => PushRoute(componentId, "ConfirmPin")}
          style={tw`border border-gray-200 w-full rounded-md my-1 flex-row items-center p-2 shadow-sm bg-white`}
        >
          <Telephone />
          <View style={tw`ml-3`}>
            <Text style={tw`text-sm text-gray-800 font-bold`}>Telepon</Text>
            <Text style={tw`text-sm text-gray-800`}>
              Kirim OTP melalui Telepon
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => PushRoute(componentId, "ConfirmPin")}
          style={tw`border border-gray-200 w-full rounded-md my-1 flex-row items-center p-2 shadow-sm bg-white`}
        >
          <Sms />
          <View style={tw`ml-3`}>
            <Text style={tw`text-sm text-gray-800 font-bold`}>SMS</Text>
            <Text style={tw`text-sm text-gray-800`}>Kirim OTP melalui SMS</Text>
          </View>
        </Pressable>
      </View>

      <BackHandlerOtp componentId={componentId} />
    </View>
  );
};

Otp.options = {
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
        alpha: {
          from: 0,
          to: 1,
          duration: 200,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        alpha: {
          from: 1,
          to: 0,
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

export default Otp;
