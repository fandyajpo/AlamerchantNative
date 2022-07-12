import React from "react";
import { View, Text, ScrollView } from "react-native";
import tw from "../../../lib/tailwind";
import {
  Dropdown,
  InRoom,
  AlacarteLable,
  EPayment,
} from "../../../lib/listSvg";
const AllOrder = () => {
  return (
    <ScrollView
      contentContainerStyle={tw`w-full px-2 pt-50 pb-20`}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={tw`w-full h-auto bg-white/95 rounded-xl border border-gray-300 shadow-sm my-2`}
      >
        <View
          style={tw`w-full border-b border-gray-300 flex-row items-center justify-between p-3`}
        >
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-myellow/20 w-16 h-16 rounded-md mr-2 items-center justify-center`}
            >
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
              <InRoom />
            </View>
            <AlacarteLable />
          </View>
          <View>
            <Text style={tw`text-gray-800 mt-2 text-sm`}>1 Item</Text>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <Text style={tw`text-gray-800 text-sm`}>Pendapatan Bersih</Text>
              <Text style={tw`text-gray-800 text-sm`}>90.000</Text>
            </View>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <View style={tw`flex-row items-center`}>
                <EPayment />
                <Text style={tw`text-sm font-bold text-gray-800`}>
                  E-payment
                </Text>
              </View>
              <Text style={tw`text-gray-800 text-sm`}>Done</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={tw`w-full h-auto bg-white/95 rounded-xl border border-gray-300 shadow-sm my-2`}
      >
        <View
          style={tw`w-full border-b border-gray-300 flex-row items-center justify-between p-3`}
        >
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-myellow/20 w-16 h-16 rounded-md mr-2 items-center justify-center`}
            >
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
              <InRoom />
            </View>
            <AlacarteLable />
          </View>
          <View>
            <Text style={tw`text-gray-800 mt-2 text-sm`}>1 Item</Text>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <Text style={tw`text-gray-800 text-sm`}>Pendapatan Bersih</Text>
              <Text style={tw`text-gray-800 text-sm`}>90.000</Text>
            </View>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <View style={tw`flex-row items-center`}>
                <EPayment />
                <Text style={tw`text-sm font-bold text-gray-800`}>
                  E-payment
                </Text>
              </View>
              <Text style={tw`text-gray-800 text-sm`}>Done</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={tw`w-full h-auto bg-white/95 rounded-xl border border-gray-300 shadow-sm my-2`}
      >
        <View
          style={tw`w-full border-b border-gray-300 flex-row items-center justify-between p-3`}
        >
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-myellow/20 w-16 h-16 rounded-md mr-2 items-center justify-center`}
            >
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
              <InRoom />
            </View>
            <AlacarteLable />
          </View>
          <View>
            <Text style={tw`text-gray-800 mt-2 text-sm`}>1 Item</Text>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <Text style={tw`text-gray-800 text-sm`}>Pendapatan Bersih</Text>
              <Text style={tw`text-gray-800 text-sm`}>90.000</Text>
            </View>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <View style={tw`flex-row items-center`}>
                <EPayment />
                <Text style={tw`text-sm font-bold text-gray-800`}>
                  E-payment
                </Text>
              </View>
              <Text style={tw`text-gray-800 text-sm`}>Done</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={tw`w-full h-auto bg-white/95 rounded-xl border border-gray-300 shadow-sm my-2`}
      >
        <View
          style={tw`w-full border-b border-gray-300 flex-row items-center justify-between p-3`}
        >
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-myellow/20 w-16 h-16 rounded-md mr-2 items-center justify-center`}
            >
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
              <InRoom />
            </View>
            <AlacarteLable />
          </View>
          <View>
            <Text style={tw`text-gray-800 mt-2 text-sm`}>1 Item</Text>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <Text style={tw`text-gray-800 text-sm`}>Pendapatan Bersih</Text>
              <Text style={tw`text-gray-800 text-sm`}>90.000</Text>
            </View>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <View style={tw`flex-row items-center`}>
                <EPayment />
                <Text style={tw`text-sm font-bold text-gray-800`}>
                  E-payment
                </Text>
              </View>
              <Text style={tw`text-gray-800 text-sm`}>Done</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={tw`w-full h-auto bg-white/95 rounded-xl border border-gray-300 shadow-sm my-2`}
      >
        <View
          style={tw`w-full border-b border-gray-300 flex-row items-center justify-between p-3`}
        >
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-myellow/20 w-16 h-16 rounded-md mr-2 items-center justify-center`}
            >
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
              <InRoom />
            </View>
            <AlacarteLable />
          </View>
          <View>
            <Text style={tw`text-gray-800 mt-2 text-sm`}>1 Item</Text>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <Text style={tw`text-gray-800 text-sm`}>Pendapatan Bersih</Text>
              <Text style={tw`text-gray-800 text-sm`}>90.000</Text>
            </View>
            <View style={tw`flex-row items-center justify-between mt-2`}>
              <View style={tw`flex-row items-center`}>
                <EPayment />
                <Text style={tw`text-sm font-bold text-gray-800`}>
                  E-payment
                </Text>
              </View>
              <Text style={tw`text-gray-800 text-sm`}>Done</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AllOrder;
