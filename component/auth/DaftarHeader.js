import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import {
  InfoPemilikOutlet,
  InformasiOutlet,
  AlamatOutlet,
} from "../../lib/listSvg";

const DaftarHeader = () => {
  return (
    <View
      style={tw`bg-mgray w-full h-24 flex-row items-center justify-between rounded-b-xl absolute top-0 px-4 pt-8`}
    >
      <InfoPemilikOutlet />
      <View style={tw`flex-row items-center`}>
        <View style={tw`bg-myellow w-2 h-2 rounded-full`} />
        <View style={tw`bg-myellow w-2 h-2 rounded-full mx-2`} />
        <View style={tw`bg-myellow w-2 h-2 rounded-full`} />
      </View>
    </View>
  );
};

export default DaftarHeader;
