import React from "react";
import { View, ScrollView, Text } from "react-native";
import tw from "../../../lib/tailwind";
import {
  Location,
  DineInService,
  TakeItService,
  TakeawayService,
  UploadImageGalery,
} from "../../../lib/listSvg";
import JamOperasional from "../JamOperasional";

const MemoizeJamOperasional = React.memo(JamOperasional);

const Info = () => {
  return (
    <ScrollView
      style={tw`w-full pt-60 bg-mgray`}
      showsVerticalScrollIndicator={false}
    >
      <View style={tw`py-4 pb-60 px-2`}>
        <View style={tw`mb-2`}>
          <Text style={tw`text-gray-800 text-sm font-bold mb-2`}>
            Outlet Tag
          </Text>
          <View style={tw`flex-row flex-wrap`}>
            <Text
              style={tw`bg-white py-2 px-4 text-gray-300 rounded-full mr-2 shadow-sm`}
            >
              Kopi
            </Text>
            <Text
              style={tw`bg-white py-2 px-4 text-gray-300 rounded-full mr-2 shadow-sm`}
            >
              Coffee
            </Text>
            <Text
              style={tw`bg-white py-2 px-4 text-gray-300 rounded-full mr-2 shadow-sm`}
            >
              Espresso
            </Text>
          </View>
        </View>
        <View style={tw`mb-2`}>
          <Text style={tw`text-gray-800 text-sm font-bold mb-2`}>
            Deskripsi
          </Text>
          <Text style={tw`text-gray-800 text-sm`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            quam sollicitudin ipsum commodo purus, tempor urna sem aliquam.
          </Text>
        </View>
        <View style={tw`mb-2`}>
          <Text style={tw`text-gray-800 text-sm font-bold mb-2`}>Lokasi</Text>
          <View style={tw`flex-row`}>
            <Location />
            <Text style={tw`text-gray-800 ml-2 `}>
              Jl. Teuku Umar Barat No.371, Padangsambian Klod, Kec. Denpasar
              Bar., Kota Denpasar, Bali
            </Text>
          </View>
        </View>
        <View style={tw`mb-2`}>
          <Text style={tw`text-gray-800 text-sm font-bold mb-2`}>Service</Text>
          <View style={tw`flex-row`}>
            <View style={tw`mr-2`}>
              <DineInService />
            </View>
            <View style={tw`mr-2`}>
              <TakeItService />
            </View>
            <View style={tw`mr-2`}>
              <TakeawayService />
            </View>
          </View>
        </View>
        <View style={tw`mb-2`}>
          <Text style={tw`text-gray-800 text-sm font-bold mb-2`}>Galery</Text>
          <View style={tw`flex-row justify-between w-full mb-2 sm:mb-4`}>
            <View
              style={tw`w-24 h-24 bg-blue-500 sm:w-30 sm:h-30 sm:bg-red-500 rounded-xl items-center justify-center`}
            ></View>
            <View
              style={tw`w-24 h-24 bg-blue-500 sm:w-30 sm:h-30 sm:bg-red-500 rounded-xl items-center justify-center`}
            ></View>
            <View
              style={tw`w-24 h-24 bg-blue-500 sm:w-30 sm:h-30 sm:bg-red-500 rounded-xl items-center justify-center`}
            ></View>
          </View>
          <View style={tw`flex-row justify-between w-full `}>
            <View
              style={tw`w-24 h-24 bg-blue-500 sm:w-30 sm:h-30 sm:bg-red-500 rounded-xl items-center justify-center`}
            ></View>
            <View
              style={tw`w-24 h-24 bg-blue-500 sm:w-30 sm:h-30 sm:bg-red-500 rounded-xl items-center justify-center`}
            ></View>
            <View
              style={tw`w-24 h-24 bg-blue-500 sm:w-30 sm:h-30 sm:bg-red-500 rounded-xl items-center justify-center`}
            ></View>
          </View>
        </View>
        <View style={tw`mb-2`}>
          <Text style={tw`text-gray-800 text-sm font-bold mb-2`}>
            Jam Operasional
          </Text>
          <MemoizeJamOperasional />
        </View>
      </View>
    </ScrollView>
  );
};

export default React.memo(Info);
