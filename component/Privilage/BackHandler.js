import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute, PushRoute } from "../../lib/ctx";

export const BackHandlerPrivilage = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Privilage</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-green-500`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => PushRoute(componentId, "TambahAKunPrivilage")}
      >
        <View
          style={tw`w-full bg-green-500/20 h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-green-500`}>
            Tambah Akun Privilage
          </Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerPilihCabang = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-white p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Pilih Cabang</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => BackRoute(componentId)}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});
