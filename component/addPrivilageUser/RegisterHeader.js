import React from "react";
import { View } from "react-native";
import tw from "../../lib/tailwind";
import {
  InfoPemilikOutlet,
  InformasiOutlet,
  AlamatOutlet,
} from "../../lib/listSvg";

const DaftarHeader = ({ daftar, setDaftar }) => {
  return (
    <View
      style={tw`bg-mgray w-full h-28 flex-col items-center justify-between rounded-b-xl absolute top-0 px-4 pt-8 pb-4`}
    >
      <View style={tw`flex items-start w-full`}>
        {daftar === 0 ? (
          <InfoPemilikOutlet />
        ) : daftar === 1 ? (
          <InformasiOutlet />
        ) : (
          daftar === 2 && <AlamatOutlet />
        )}
      </View>

      <View style={tw`flex-row items-center`}>
        <View
          style={tw`${
            daftar === 0 ? "bg-myellow" : "bg-myellow/50"
          } w-2 h-2 rounded-full`}
        />
        <View
          style={tw`${
            daftar === 1 ? "bg-myellow" : "bg-myellow/50"
          } w-2 h-2 rounded-full mx-2`}
        />
        <View
          style={tw`${
            daftar === 2 ? "bg-myellow" : "bg-myellow/50"
          } w-2 h-2 rounded-full`}
        />
      </View>
    </View>
  );
};

export default DaftarHeader;
