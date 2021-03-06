import React from "react";
import tw from "../../lib/tailwind";
import { View, TextInput, Text } from "react-native";
import { FilterDropdown, Search, Calender } from "../../lib/listSvg";

const FilterTime = () => {
  return (
    <View
      style={tw`absolute bg-mgray z-50 w-full h-14 rounded-t-2xl border-t-2 border-l bottom-0 border-r border-gray-300 flex-row items-center px-4 flex-row items-center justify-center`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <View style={tw`px-2`}>
          <FilterDropdown />
        </View>

        <View style={tw`flex-row items-center justify-between w-auto`}>
          <View style={tw`bg-myellow w-auto h-8 rounded-full mx-2`}>
            <View style={tw`flex-row px-8`}>
              <Calender />
              <Text style={tw`text-myellow`}>aa</Text>
            </View>
          </View>

          <View style={tw`bg-myellow w-auto h-8 rounded-full mx-2`}>
            <View style={tw`flex-row px-8`}>
              <Calender />
              <Text style={tw`text-myellow`}>aa</Text>
            </View>
          </View>
        </View>

        <View style={tw`px-2`}>
          <Search />
        </View>
      </View>
    </View>
  );
};

export default FilterTime;
