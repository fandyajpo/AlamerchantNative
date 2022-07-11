import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { PushRoute } from "../../../lib/ctx";
import {
  RightDropdown,
  TaxAndService,
  Debit,
  Bahasa,
  BiayaTakeaway,
  Print,
  Logout,
} from "../../../lib/listSvg";

const SettingMenu = React.memo(({ componentId, logoutRef }) => {
  return (
    <>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          tw`bg-white w-full h-20 border-b border-gray-200 flex-row items-center justify-between px-2 shadow-sm`,
        ]}
        onPress={() => PushRoute(componentId, "TaxAndService")}
      >
        <View style={tw`flex-row items-center`}>
          <TaxAndService />
          <View style={tw`ml-4`}>
            <Text style={tw`text-sm font-bold text-gray-800`}>
              Tax & Service
            </Text>
            <Text style={tw`text-sm text-gray-300`}>
              Atur biaya pajak dan service
            </Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          tw`bg-white w-full h-20 border-b border-gray-200 flex-row items-center justify-between px-2 shadow-sm`,
        ]}
        onPress={() => PushRoute(componentId, "DebitBank")}
      >
        <View style={tw`flex-row items-center`}>
          <Debit />
          <View style={tw`ml-4`}>
            <Text style={tw`text-sm font-bold text-gray-800`}>Debit Bank</Text>
            <Text style={tw`text-sm text-gray-300`}>
              Pilih debit bank yang digunakan
            </Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          tw`bg-white w-full h-20 border-b border-gray-200 flex-row items-center justify-between px-2 shadow-sm`,
        ]}
        onPress={() => PushRoute(componentId, "BiayaTakeaway")}
      >
        <View style={tw`flex-row items-center`}>
          <BiayaTakeaway />
          <View style={tw`ml-4`}>
            <Text style={tw`text-sm font-bold text-gray-800`}>
              Biaya Takeaway
            </Text>
            <Text style={tw`text-sm text-gray-300`}>
              Atur biaya untuk takeaway
            </Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          tw`bg-white w-full h-20 border-b border-gray-200 flex-row items-center justify-between px-2 shadow-sm`,
        ]}
        onPress={() => PushRoute(componentId, "Printer")}
      >
        <View style={tw`flex-row items-center`}>
          <Print />
          <View style={tw`ml-4`}>
            <Text style={tw`text-sm font-bold text-gray-800`}>Printer</Text>
            <Text style={tw`text-sm text-gray-300`}>
              Atur pengaturan printer
            </Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? 0.5 : 1.0 },
          tw`bg-white w-full h-20 border-b border-gray-200 flex-row items-center justify-between px-2 shadow-sm`,
        ]}
        onPress={() => PushRoute(componentId, "Language")}
      >
        <View style={tw`flex-row items-center`}>
          <Bahasa />
          <View style={tw`ml-4`}>
            <Text style={tw`text-sm font-bold text-gray-800`}>Bahasa</Text>
            <Text style={tw`text-sm text-gray-300`}>Atur bahasa aplikasi</Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
      <Pressable
        onPress={() => logoutRef.current.show()}
        style={tw`bg-white w-full h-20 border-b border-gray-200 flex-row items-center justify-between px-2 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <Logout />
          <View style={tw`ml-4`}>
            <Text style={tw`text-sm font-bold text-gray-800`}>Keluar</Text>
            <Text style={tw`text-sm text-gray-300`}>Keluar dari akun</Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
    </>
  );
});

export default SettingMenu;
