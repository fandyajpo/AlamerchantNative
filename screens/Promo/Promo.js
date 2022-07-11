import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import {
  RightDropdown,
  AlacartePromo,
  AlamerchantPromo,
  DataAnalisa,
} from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";

const Promo = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView style={tw`mb-32`}>
        <View style={tw`p-2`}>
          <View style={tw`flex-col py-2 border-mgray`}>
            <Pressable
              onPress={() => PushRoute(componentId, "PromoMerchant")}
              style={tw`flex-row items-center justify-between border border-gray-300 p-3 bg-white rounded-md mb-2 shadow-sm`}
            >
              <View style={tw`flex-row items-center`}>
                <AlamerchantPromo />
                <View>
                  <Text style={tw`text-gray-800 font-bold ml-2`}>
                    Promo Alamerchant
                  </Text>
                  <Text style={tw`text-gray-800 ml-2 text-sm w-52 font-light`}>
                    Kelola promo offline untuk outlet Anda sendiri disini.
                  </Text>
                </View>
              </View>
              <RightDropdown />
            </Pressable>
            <Pressable
              onPress={() => PushRoute(componentId, "PromoCarte")}
              style={tw`flex-row items-center justify-between border border-gray-300 p-3 bg-white rounded-md mb-2 shadow-sm`}
            >
              <View style={tw`flex-row items-center`}>
                <AlacartePromo />
                <View>
                  <Text style={tw`text-gray-800 font-bold ml-2`}>
                    Promo Ala carte
                  </Text>
                  <Text style={tw`text-gray-800 ml-2 text-sm w-52 font-light`}>
                    Kelola promo online pada aplikasi Ala Carte disini
                  </Text>
                </View>
              </View>
              <RightDropdown />
            </Pressable>
            <Pressable
              style={tw`flex-row items-center justify-between border border-gray-300 p-3 bg-white rounded-md mb-2 shadow-sm`}
            >
              <View style={tw`flex-row items-center`}>
                <DataAnalisa />
                <View>
                  <Text style={tw`text-gray-800 font-bold ml-2`}>
                    Data Analisa
                  </Text>
                  <Text style={tw`text-gray-800 ml-2 text-sm w-52 font-light`}>
                    Lihat data analisa promo Anda disini
                  </Text>
                </View>
              </View>
              <RightDropdown />
            </Pressable>
          </View>
        </View>
      </ScrollView>
      <View
        style={tw`border-b-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute bottom-0 w-full h-4 pb-2`}
      ></View>
    </View>
  );
};

export default React.memo(Promo);
