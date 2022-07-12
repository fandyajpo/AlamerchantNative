import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { OpenOrder, CloseOrder, OutletClose } from "../../lib/listSvg";
import { navOption, PushRoute } from "../../lib/ctx";

const Header = ({ componentId }) => {
  return (
    <View
      style={tw`h-[7rem] flex flex-row bg-mgray absolute top-0 z-10 w-full px-4`}
    >
      <View style={tw`flex-row justify-between items-center w-full mt-8`}>
        <Pressable
          style={tw`bg-gray-800 h-8 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-white px-6 text-sm font-bold mb-0.5`}>
            Semua
          </Text>
        </Pressable>
        <Pressable style={tw``}>
          <Text style={tw`text-gray-800 text-base font-bold`} numberOfLines={1}>
            Red White Coffee
          </Text>
        </Pressable>
        <Pressable onPress={() => PushRoute(componentId, "MerchantStatus")}>
          <OpenOrder />
        </Pressable>
      </View>
    </View>
  );
};
export default React.memo(Header);
