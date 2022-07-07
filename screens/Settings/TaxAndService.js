import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  Button,
} from "react-native";
import DefaultBackHandlerComponent from "../../component/defaultBackHandler";
import tw from "../../lib/tailwind";
import { RadioButton } from "react-native-paper";
import { BackHandlerPrinter } from "../../component/setting/BackHandler";

const TaxService = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView contentContainerStyle={tw`pb-32  h-full`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Sistem Tax</Text>
          <View
            style={tw`flex-row items-center justify-between border-b py-2 border-mgray`}
          >
            <Text style={tw`text-sm text-gray-800`}>Include</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"checked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
          <View style={tw`flex-row items-center justify-between py-2 `}>
            <Text style={tw`text-sm text-gray-800`}>Include</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"unchecked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Tax ( % )</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              style={tw`bg-mgray border border-gray-300 rounded-md h-10`}
            />
          </View>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Service ( % )</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              style={tw`bg-mgray border border-gray-300 rounded-md h-10`}
            />
          </View>
        </View>
      </ScrollView>
      <DefaultBackHandlerComponent
        componentId={componentId}
        title={"Tax & Service"}
      />
    </View>
  );
};

TaxService.options = {
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

export default TaxService;
