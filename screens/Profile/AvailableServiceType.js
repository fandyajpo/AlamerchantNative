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

const AvailableServiceType = ({ componentId }) => {
  const editProfileRef = React.useRef(null);
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView style={tw`mb-32`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Nama Outlet</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Nama outlet kamu"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10p px-2`}
            />
          </View>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Deskripsi</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Deskripsi outletmu"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10 px-2`}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Foto</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <Text style={tw`text-gray-300  text-sm mb-2`}>
              Upload foto brand Outlet Anda minimal 500x500px
            </Text>
            <UploadImage />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>
            Kategory Outlet
          </Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <Text style={tw`text-gray-300  text-sm mb-2`}>
              Pilih Kategori Outlet Anda
            </Text>
            <Pressable
              onPress={() => PushRoute(componentId, "UpdateOutletCategory")}
              style={tw`flex-row items-center justify-between border border-gray-300 p-3 rounded-md`}
            >
              <View style={tw`flex-row items-center`}>
                <NoCategory />
                <Text style={tw`text-gray-800 font-bold ml-2`}>Pilih</Text>
              </View>
              <RightDropdown />
            </Pressable>
          </View>
        </View>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Tag Outlet</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <Text style={tw`text-gray-300  text-sm mb-2`}>
              Tag akan membantu pelanggan dalam pencarian
            </Text>
            <Pressable
              onPress={() => editProfileRef.current.show()}
              style={tw`bg-green-500/20 w-44 rounded-full flex items-center justify-center`}
            >
              <Text style={tw`p-2 text-green-500 font-bold text-sm`}>
                Tambah Tag
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <TaggingSheet editProfileRef={editProfileRef} />
      <BackHandlerEditProfile
        componentId={componentId}
        title={"Edit Profile"}
      />
    </View>
  );
};

AvailableServiceType.options = {
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

export default AvailableServiceType;
