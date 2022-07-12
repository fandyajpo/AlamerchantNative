import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { Wallet, Point } from "../../../lib/listSvg";
import { PushRoute } from "../../../lib/ctx";

const Outlet = ({ componentId }) => {
  return (
    <ScrollView
      style={tw`w-full pt-60 bg-mgray`}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw`py-4 px-2 flex-row items-center justify-center `}>
        <View
          style={tw`bg-white w-2/4 h-16 rounded-xl border-gray-300 border flex-row items-center justify-center`}
        >
          <Wallet />
          <View style={tw`ml-4`}>
            <Text style={tw`text-gray-800 text-xs`}>Saldo</Text>
            <Text style={tw`text-gray-800 text-sm font-bold`} numberOfLines={1}>
              Rp 20.000.000
            </Text>
          </View>
        </View>
        <View style={tw`w-2`} />
        <View
          style={tw`bg-white w-2/4 h-16 rounded-xl border-gray-300 border flex-row items-center justify-center`}
        >
          <Point />
          <View style={tw`ml-4`}>
            <Text style={tw`text-gray-800 text-xs`}>Saldo</Text>
            <Text style={tw`text-gray-800 text-sm font-bold`} numberOfLines={1}>
              Rp 20.000
            </Text>
          </View>
        </View>
      </View>
      <View style={tw`flex-row justify-center items-center`}>
        <View style={[{ flex: 1 }, tw`m-2 justify-center items-center`]}>
          <View style={tw`bg-myellow/20 w-16 h-16 rounded-xl`} />
          <Text style={tw`text-gray-800 text-center text-xs`}>Cabang</Text>
        </View>
        <Pressable
          onPress={() => PushRoute(componentId, "Privilage")}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0, flex: 1 },
            tw`m-2 justify-center items-center`,
          ]}
        >
          <View style={tw`bg-violet-500/20 w-16 h-16 rounded-xl`} />
          <Text style={tw`text-gray-800 text-center text-xs`}>Privilage</Text>
        </Pressable>
        <Pressable
          onPress={() => PushRoute(componentId, "Member")}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0, flex: 1 },
            tw`m-2 justify-center items-center`,
          ]}
        >
          <View style={tw`bg-red-500/20 w-16 h-16 rounded-xl`} />
          <Text style={tw`text-gray-800 text-center text-xs`}>Member</Text>
        </Pressable>
        <View style={[{ flex: 1 }, tw`m-2 justify-center items-center`]}>
          <View style={tw`bg-blue-500/20 w-16 h-16 rounded-xl`} />
          <Text style={tw`text-gray-800 text-center text-xs`}>Report</Text>
        </View>
      </View>
      <View style={tw`flex-row justify-center`}>
        <View style={[{ flex: 1 }, tw`m-2 justify-center items-center`]}>
          <View style={tw`bg-orange-500/20 w-16 h-16 rounded-xl`} />
          <Text style={tw`text-gray-800 text-center text-xs`}>Table</Text>
        </View>
        <Pressable
          onPress={() => PushRoute(componentId, "MenuDanStock")}
          style={[{ flex: 1 }, tw`m-2 justify-center items-center`]}
        >
          <View style={tw`bg-green-800/20 w-16 h-16 rounded-xl`} />
          <Text style={tw`text-gray-800 text-center text-xs`}>
            Menu & Stock
          </Text>
        </Pressable>
        <Pressable
          onPress={() => PushRoute(componentId, "Setting")}
          style={({ pressed }) => [
            { opacity: pressed ? 0.5 : 1.0, flex: 1 },
            tw`m-2 justify-center items-center`,
          ]}
        >
          <View style={tw`bg-black/20 w-16 h-16 rounded-xl`} />
          <Text style={tw`text-gray-800 text-center text-xs`}>Setting</Text>
        </Pressable>
        <View style={[{ flex: 1 }, tw`m-2 justify-center items-center`]}>
          <View style={tw`bg-blue-500 w-16 h-16 rounded-xl`} />
          <Text style={tw`text-gray-800 text-center text-xs`}>Delivery</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default React.memo(Outlet);
