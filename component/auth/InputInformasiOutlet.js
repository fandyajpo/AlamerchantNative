import React from "react";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { BackHandlerTaxAndService } from "../../component/profileMerchant/BackHandler";
import { PushRoute, BackRoute } from "../../lib/ctx";
import { RightDropdown, UploadImage } from "../../lib/listSvg";
const TaxService = ({ componentId, ourRef }) => {
  return (
    <View style={tw`w-full h-full pt-24`}>
      <ScrollView contentContainerStyle={tw`pb-32  h-full`}>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Nama Outlet</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Nama Outlet kamu"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10`}
            />
          </View>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Deskripsi</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <TextInput
              placeholder="Deskripsi"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10`}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Foto</Text>
          <Text style={tw`text-gray-300  text-sm mb-2`}>
            Upload foto brand Outlet Anda minimal 500x500px
          </Text>

          <Pressable
            onPress={() => PushRoute(componentId, "UpdateOutletCategory")}
          >
            <UploadImage />
          </Pressable>
        </View>
        <View style={tw`bg-mgray w-full h-2 my-2`} />
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Bank</Text>
          <Text style={tw`text-gray-300  text-sm mb-2`}>
            Pilih Bank sebagai penarikan saldo Outlet Anda
          </Text>

          <Pressable
            onPress={() => PushRoute(componentId, "UpdateOutletCategory")}
            style={tw`flex-row items-center justify-between border border-gray-300 p-3 rounded-md`}
          >
            <View style={tw`flex-row items-center`}>
              <View
                style={tw`bg-mgray w-12 rounded-md h-12 items-center justify-center`}
              ></View>
              <Text style={tw`text-gray-800 font-bold ml-2`}>
                Pilih Kategori
              </Text>
            </View>
            <RightDropdown />
          </Pressable>
        </View>
        <View style={tw`p-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Tag Outlet</Text>
          <View style={tw`flex-col py-2 border-mgray`}>
            <Text style={tw`text-gray-300  text-sm mb-2`}>
              Tag akan membantu pelanggan dalam pencarian
            </Text>
            <Pressable
              onPress={() => ourRef.current.show()}
              style={tw`bg-green-500/20 w-44 rounded-full flex items-center justify-center`}
            >
              <Text style={tw`p-2 text-green-500 font-bold text-sm`}>
                Tambah Tag
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <BackHandlerTaxAndService componentId={componentId} />
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
