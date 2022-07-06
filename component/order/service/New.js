import React from "react";
import tw from "../../../lib/tailwind";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import {
  Dropdown,
  EPayment,
  InRoom,
  Cash,
  AlacarteLable,
  DineIn,
} from "../../../lib/listSvg";
import { PushRoute } from "../../../lib/ctx";

const NewService = ({ componentId }) => {
  const newData = [
    {
      table: "2B",
      user: "Wilson Ray",
      order_created: "08:18, 06 Jul",
      service_type: "dine_in",
      item_length: 9,
      grand_total: "90.000",
      payment_method: "Tunai",
      payment_status: "Pay now",
    },
    {
      table: "6C",
      user: "Faouzia",
      order_created: "08:18, 06 Jul",
      service_type: "dine_in",
      item_length: 44,
      grand_total: "400.400",
      payment_method: "Tunai",
      payment_status: "Unpaid",
    },
  ];

  return (
    <ScrollView style={tw`w-full px-2`} showsVerticalScrollIndicator={false}>
      {newData.map((d, i) => {
        return (
          <View
            key={i}
            style={tw`w-full h-auto bg-white/95 rounded-xl border border-gray-300 shadow-sm my-2`}
          >
            <View
              style={tw`w-full border-b border-gray-300 flex-row items-center justify-between p-3`}
            >
              <View style={tw`flex-row items-center`}>
                <View
                  style={tw`bg-myellow/20 w-16 h-16 rounded-md mr-2 items-center justify-center`}
                >
                  <Text style={tw`text-myellow font-bold text-base`}>
                    {d.table}
                  </Text>
                </View>
                <View>
                  <Text style={tw`text-gray-800 font-bold`}>{d.user}</Text>
                  <Text style={tw`text-gray-400`}>{d.order_created}</Text>
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
                <Text style={tw`text-gray-800 mt-2 text-sm`}>
                  {d.item_length} Items
                </Text>
                <View style={tw`flex-row items-center justify-between mt-2`}>
                  <Text style={tw`text-gray-800 text-sm font-bold`}>
                    Grand Total
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <Text style={tw`text-gray-800 text-sm font-light`}>
                      {d.payment_status}
                    </Text>
                    <View style={tw`h-3 w-0.5 bg-gray-300 mx-2`} />
                    <Text style={tw`text-gray-800 text-sm`}>
                      {d.grand_total}
                    </Text>
                  </View>
                </View>
                <View style={tw`flex-row items-center justify-between mt-2`}>
                  <View style={tw`flex-row items-center`}>
                    <Cash />
                    <Text style={tw`text-sm font-bold text-gray-800 ml-2`}>
                      {d.payment_method}
                    </Text>
                  </View>
                  <View style={tw`flex-row items-center`}>
                    <TouchableOpacity
                      style={tw`bg-red-500/10 mr-2 rounded-full`}
                    >
                      <Text style={tw`text-red-500 py-2 px-6 font-bold`}>
                        Refuse
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => PushRoute(componentId, "OrderDetail")}
                      style={tw`bg-blue-500/10 ml-2 rounded-full`}
                    >
                      <Text style={tw`text-blue-500 py-2 px-6 font-bold`}>
                        Detail
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default React.memo(NewService);
