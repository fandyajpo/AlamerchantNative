import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { Back, Search } from "../../lib/listSvg";
import { PushRoute, BackRoute } from "../../lib/ctx";
const BackHandlerComponent = ({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-44 bg-mgray p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>
            Detail Pesanan
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6 shadow-xl flex items-end`}></View>
      </View>
      <View style={tw`items-center justify-between flex-row my-4`}>
        <Text style={tw`text-sm font-bold text-gray-800`}>Grand Total</Text>
        <Text style={tw`text-sm font-bold text-gray-800`}>Rp90.000</Text>
      </View>
      <View style={tw`flex-row items-center justify-between mr-2`}>
        <Pressable
          style={tw`w-2/4 bg-red-500/20 h-10 rounded-full items-center justify-center`}
          onPress={() => BackRoute(componentId)}
        >
          <Text style={tw`text-red-500 font-bold`}>Refuse</Text>
        </Pressable>
        <View style={tw`w-2`} />
        <Pressable
          style={tw`w-2/4 bg-myellow/20 h-10 rounded-full items-center justify-center`}
          onPress={() => BackRoute(componentId)}
        >
          <Text style={tw`text-myellow font-bold`}>Bayar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BackHandlerComponent;
