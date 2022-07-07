import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Keyboard,
  Button,
  Pressable,
} from "react-native";
import { BackHandlerEditProfile } from "../../component/profileMerchant/BackHandler";
import { TaggingSheet } from "../../component/profileMerchant/BottomSheet";
import tw from "../../lib/tailwind";
import { UploadImage, NoCategory, RightDropdown } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";

const UpdateGalery = ({ componentId }) => {
  const editProfileRef = React.useRef(null);
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView style={tw`mb-32`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Galery</Text>
          <Text style={tw`text-gray-300 text-sm`}>
            Upload foto Galeri Outlet Anda minimal 500x500px
          </Text>
          <View style={tw`flex-row w-full bg-white`}>
            <View style={[{ flex: 1 }, tw`justify-center items-center`]}>
              <View style={tw`w-11/12 h-11/12 bg-red-500`} />
            </View>
            <View style={[{ flex: 1 }, tw`justify-center items-center`]}>
              <View style={tw`w-11/12 h-11/12 bg-red-500`} />
            </View>
            <View style={[{ flex: 1 }, tw`justify-center items-center`]}>
              <View style={tw`w-11/12 h-11/12 bg-red-500`} />
            </View>
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
      </ScrollView>
      <TaggingSheet editProfileRef={editProfileRef} />
      <BackHandlerEditProfile
        componentId={componentId}
        title={"Update Galery"}
      />
    </View>
  );
};

UpdateGalery.options = {
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

export default UpdateGalery;
