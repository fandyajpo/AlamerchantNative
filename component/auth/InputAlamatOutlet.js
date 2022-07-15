import React from "react";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { BackHandlerEditProfile } from "../../component/profileMerchant/BackHandler";
import { TaggingSheet } from "../../component/profileMerchant/BottomSheet";
import tw from "../../lib/tailwind";
import { OpenMap } from "../../lib/listSvg";

const UpdateAlamat = ({ componentId }) => {
  const editProfileRef = React.useRef(null);
  return (
    <View style={tw`w-full h-full bg-white pt-24`}>
      <ScrollView style={tw`mb-32`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>
            Alamat Lengkap
          </Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Alamat Outlet"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10p px-2`}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>
            Lokasi ( titik lokasi )
          </Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <Text style={tw`text-gray-300  text-sm mb-2`}>
              Geser untuk menentukan titik lokasi outletmu
            </Text>
            <View style={tw`w-full rounded-md bg-mgray h-44`}>
              <Pressable
                onPress={() => alert("Go to google map")}
                style={tw`absolute bottom-2 right-2`}
              >
                <OpenMap />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw`p-2`}>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Masukkan titik koordinat"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10p px-2`}
            />
          </View>
        </View>
      </ScrollView>
      <TaggingSheet editProfileRef={editProfileRef} />
      <BackHandlerEditProfile componentId={componentId} title={"Edit Alamat"} />
    </View>
  );
};

UpdateAlamat.options = {
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

export default React.memo(UpdateAlamat);
