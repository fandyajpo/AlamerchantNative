import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute, PushRoute } from "../../lib/ctx";
export const BackHandlerOtp = ({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-44 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Kirim OTP</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};

export const BackHandlerConfirmPin = ({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-44 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>
            Konfirmasi Pin
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => PushRoute(componentId, "Feed")}
      >
        <View
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Konfirmasi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const BackHandlerDaftar = ({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Daftar</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => PushRoute(componentId, "Feed")}
      >
        <View
          style={tw`w-full bg-myellow h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Lanjut</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
