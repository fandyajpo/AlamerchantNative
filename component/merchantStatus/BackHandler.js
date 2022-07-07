import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { PushRoute, BackRoute } from "../../lib/ctx";
const BackHandlerComponent = ({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Status Outlet</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => BackRoute(componentId)}
      >
        <View
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Simpan</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BackHandlerComponent;
