import React from 'react';
import tw from '../../../lib/tailwind';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {
  Dropdown,
  EPayment,
  InRoom,
  Cash,
  AlacarteLable,
  DineIn,
} from '../../../lib/listSvg';
const NewService = () => {
  const newData = [];

  return (
    <ScrollView style={tw`w-full px-2`} showsVerticalScrollIndicator={false}>
      <View
        style={tw`w-full h-auto bg-white/95 rounded-xl border border-gray-300 shadow-sm my-2`}>
        <View
          style={tw`w-full border-b border-gray-300 flex-row items-center justify-between p-3`}>
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-myellow/20 w-16 h-16 rounded-md mr-2 items-center justify-center`}>
              <Text style={tw`text-myellow font-bold text-base`}>2999</Text>
            </View>
            <View>
              <Text style={tw`text-gray-800 font-bold`}>Fandy Habibi</Text>
              <Text style={tw`text-gray-400`}>08:18, 08 Jul</Text>
            </View>
          </View>
          <Dropdown />
        </View>
        <View style={tw`p-3`}>
          <View style={tw`w-full flex-row items-center`}>
            <View style={tw`mr-2`}>
              <DineIn />
            </View>
            <AlacarteLable />
          </View>
          <View>
            <Text style={tw`text-gray-800 mt-2 text-sm`}>1 Item</Text>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <Text style={tw`text-gray-800 text-sm font-bold`}>
                Grand Total
              </Text>
              <View style={tw`flex-row items-center`}>
                <Text style={tw`text-gray-800 text-sm font-light`}>
                  Pay now
                </Text>
                <View style={tw`h-3 w-0.5 bg-gray-300 mx-2`} />
                <Text style={tw`text-gray-800 text-sm`}>90.000</Text>
              </View>
            </View>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <View style={tw`flex-row items-center`}>
                <Cash />
                <Text style={tw`text-sm font-bold text-gray-800 ml-2`}>
                  Tunai
                </Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity style={tw`bg-red-500/10 mr-2 rounded-full`}>
                  <Text style={tw`text-red-500 py-2 px-6 font-bold`}>
                    Refuse
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={tw`bg-blue-500/10 ml-2 rounded-full`}>
                  <Text style={tw`text-blue-500 py-2 px-6 font-bold`}>
                    Detail
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default React.memo(NewService);
