import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import { CalenderIcon } from "../../lib/listSvg";
const JamOperasional = () => {
  return (
    <View>
      <View style={tw`flex-row justify-between border-b border-gray-300 py-2`}>
        <View style={tw`flex-row items-center`}>
          <CalenderIcon />
          <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Senin</Text>
        </View>
        <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
      </View>
      <View style={tw`flex-row justify-between border-b border-gray-300 py-2`}>
        <View style={tw`flex-row items-center`}>
          <CalenderIcon />
          <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Selasa</Text>
        </View>
        <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
      </View>
      <View style={tw`flex-row justify-between border-b border-gray-300 py-2`}>
        <View style={tw`flex-row items-center`}>
          <CalenderIcon />
          <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Rabu</Text>
        </View>
        <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
      </View>
      <View style={tw`flex-row justify-between border-b border-gray-300 py-2`}>
        <View style={tw`flex-row items-center`}>
          <CalenderIcon />
          <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Kamis</Text>
        </View>
        <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
      </View>
      <View style={tw`flex-row justify-between border-b border-gray-300 py-2`}>
        <View style={tw`flex-row items-center`}>
          <CalenderIcon />
          <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Jum'at</Text>
        </View>
        <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
      </View>
      <View style={tw`flex-row justify-between border-b border-gray-300 py-2`}>
        <View style={tw`flex-row items-center`}>
          <CalenderIcon />
          <Text style={tw`text-gray-800 text-xs font-bold ml-2`}>Sabtu</Text>
        </View>
        <Text style={tw`text-gray-300`}>00.00 - 00.23 WIB</Text>
      </View>
    </View>
  );
};

export default React.memo(JamOperasional);
