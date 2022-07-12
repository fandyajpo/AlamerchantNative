import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind";
import { Dropdown, PendapatanBersihIcon } from "../../lib/listSvg";
import { List } from "react-native-paper";
const PendapatanBersih = () => {
  return (
    <View
      style={tw`bg-mgray/95 w-full border border-gray-300 px-3 py-4 absolute top-30 z-20`}
    >
      <View style={tw`flex-row items-center justify-between`}>
        <View>
          <View style={tw`flex-row items-center`}>
            <PendapatanBersihIcon />
            <Text style={tw`text-gray-800 text-sm ml-2`}>
              Pendapatan Bersih
            </Text>
          </View>
          <Text style={tw`text-gray-800 text-3xl font-semibold`}>
            Rp1.450.000
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <Dropdown />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PendapatanBersih;
