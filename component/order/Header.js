import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind";
import { OpenOrder, CloseOrder, OutletClose } from "../../lib/listSvg";
import { navOption, PushRoute } from "../../lib/ctx";

const Header = ({ pushToMerchanStatus, componentId }) => {
  return (
    <View
      style={tw`h-[7rem] flex flex-row bg-mgray absolute top-0 z-10 w-full px-4`}
    >
      <View style={tw`flex-row justify-between items-end mb-4 w-full`}>
        <TouchableOpacity
          style={tw`bg-gray-800 h-8 rounded-full flex items-center justify-center`}
          activeOpacity={0.5}
        >
          <Text style={tw`text-white px-6 text-sm font-bold mb-0.5`}>
            Semua
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex items-center justify-center`}
          activeOpacity={0.5}
        >
          <Text
            style={tw`text-gray-800 text-base font-bold mb-0.5`}
            numberOfLines={1}
          >
            Red White Coffee
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => PushRoute(componentId, "MerchantStatus")}
          activeOpacity={0.5}
        >
          <OpenOrder />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default React.memo(Header);
