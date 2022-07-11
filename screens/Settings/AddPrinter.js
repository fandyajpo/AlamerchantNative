import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  Button,
} from "react-native";
import { BackHandlerAddPrinter } from "../../component/profileMerchant/BackHandler";
import tw from "../../lib/tailwind";
import { RadioButton } from "react-native-paper";

const AddPrinter = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView contentContainerStyle={tw`pb-32  h-full`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>
            Nama Perangkat
          </Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Masukan nama perangkat printer"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2`}
            />
          </View>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Ip</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Masukan IP"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2`}
            />
          </View>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Station</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Masukan nama stations"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2`}
            />
          </View>
        </View>
      </ScrollView>
      <BackHandlerAddPrinter componentId={componentId} />
    </View>
  );
};

AddPrinter.options = {
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

export default AddPrinter;
