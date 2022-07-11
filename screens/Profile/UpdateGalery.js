import React, { useEffect } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { BackHandlerEditProfile } from "../../component/profileMerchant/BackHandler";
import { TaggingSheet } from "../../component/profileMerchant/BottomSheet";
import tw from "../../lib/tailwind";
import {
  UploadImageGalery,
  NoCategory,
  RightDropdown,
} from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";

const UpdateGalery = ({ componentId }) => {
  const editProfileRef = React.useRef(null);
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView style={tw`mb-32`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Galery</Text>
          <Text style={tw`text-gray-300 text-sm mb-2`}>
            Upload foto Galeri Outlet Anda minimal 500x500px
          </Text>
          <View
            style={tw`flex-row justify-between w-full bg-white mb-2 sm:mb-4`}
          >
            <View
              style={tw`w-24 h-24 sm:w-30 sm:h-30 sm:bg-red-500 bg-blue-500 rounded-xl items-center justify-center`}
            >
              <UploadImageGalery />
            </View>
            <View
              style={tw`w-24 h-24 sm:w-30 sm:h-30 sm:bg-red-500 bg-blue-500 rounded-xl items-center justify-center`}
            >
              <UploadImageGalery />
            </View>
            <View
              style={tw`w-24 h-24 sm:w-30 sm:h-30 sm:bg-red-500 bg-blue-500 rounded-xl items-center justify-center`}
            >
              <UploadImageGalery />
            </View>
          </View>
          <View style={tw`flex-row justify-between w-full bg-white `}>
            <View
              style={tw`w-24 h-24 sm:w-30 sm:h-30 sm:bg-red-500 bg-blue-500 rounded-xl items-center justify-center`}
            >
              <UploadImageGalery />
            </View>
            <View
              style={tw`w-24 h-24 sm:w-30 sm:h-30 sm:bg-red-500 bg-blue-500 rounded-xl items-center justify-center`}
            >
              <UploadImageGalery />
            </View>
            <View
              style={tw`w-24 h-24 sm:w-30 sm:h-30 sm:bg-red-500 bg-blue-500 rounded-xl items-center justify-center`}
            >
              <UploadImageGalery />
            </View>
          </View>
        </View>
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
