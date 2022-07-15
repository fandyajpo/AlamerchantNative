import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { RightDropdown } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";
const Header = ({ componentId }) => {
  return (
    <Pressable
      onPress={() => PushRoute(componentId, "PilihCabang")}
      style={tw`bg-mgray w-full p-5 flex-row items-center justify-between`}
    >
      <View style={tw`flex-row items-center`}>
        <View style={tw`bg-black w-12 h-12 rounded-md mr-2`} />
        <View>
          <Text style={tw`text-gray-800 font-bold text-base`}>
            Redwhite Coffee
          </Text>
          <Text style={tw`text-[10px] w-48 text-gray-800`}>
            Jl. Teuku Umar Barat No.371, Padangsambian Klod, Kec. Denpasar Bar.,
            Kota Denpasar, Bali
          </Text>
        </View>
      </View>
      <RightDropdown />
    </Pressable>
  );
};

export default Header;
