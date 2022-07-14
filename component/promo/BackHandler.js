import React from "react";
import tw from "../../lib/tailwind";
import { BackRoute, PushRoute } from "../../lib/ctx";
import { View, Text, Pressable } from "react-native";
import { Back, Search } from "../../lib/listSvg";
const BackHandlerPromoAlacarte = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-44 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6`} onPress={() => BackRoute(componentId)}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>
            Promo Alacarte
          </Text>
          <View style={tw`h-0.5 w-full rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6 `} />
      </View>
    </View>
  );
});

const BackHandlerPilihMenu = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-32 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6`} onPress={() => BackRoute(componentId)}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8`}>
          <Text style={tw`text-gray-800 text-lg font-bold text-center`}>
            Pilih Menu
          </Text>
          <View style={tw`h-0.5 w-full rounded-full bg-myellow`} />
        </View>
        <Pressable style={tw`w-2/6 flex-row justify-end`}>
          <Search />
        </Pressable>
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => PushRoute(componentId, "DiskonMenu")}
      >
        <View
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

const BackHandlerDiskonMenu = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-44 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6`} onPress={() => BackRoute(componentId)}>
          <Back />
        </Pressable>
        <View style={tw`w-full h-8`}>
          <Text style={tw`text-gray-800 text-lg font-bold text-center`}>
            Diskon Menu
          </Text>
          <View style={tw`h-0.5 w-full rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6 h-2`} />
      </View>
    </View>
  );
});

module.exports = {
  BackHandlerPromoAlacarte,
  BackHandlerPilihMenu,
  BackHandlerDiskonMenu,
};
