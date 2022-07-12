import React from "react";
import tw from "../../lib/tailwind";
import { BackRoute } from "../../lib/ctx";
import { View, Text, Pressable } from "react-native";
import { Back } from "../../lib/listSvg";
const BackHandlerPromoAlacarte = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-32 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </Pressable>
        <View style={tw`w-full h-8 `}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>
            Promo Alacarte
          </Text>
          <View style={tw`h-0.5 w-26 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

module.exports = {
  BackHandlerPromoAlacarte,
};