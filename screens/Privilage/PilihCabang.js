import React from "react";
import { View, Text, Image } from "react-native";
import tw from "../../lib/tailwind";
import {
  MenuAktif,
  ModifierAktif,
  SoldOut,
  RightDropdown,
  DataAnalisa,
  MultiMenu,
  PrivilageDefault,
} from "../../lib/listSvg";

const Users = [
  {
    nama: "Fandy Ahmad Januar Pratama",
    role: "Admin",
  },
  {
    nama: "Selena",
    role: "Manager",
  },
  {
    nama: "Leonardo",
    role: "Bar",
  },
];

const MenuDanStock = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white`}>
      {Users.length > 0 &&
        Users.map((u, i) => {
          return (
            <View
              key={i}
              style={tw`w-full rounded-md border-b border-gray-300 flex-row items-center justify-between px-5 py-4`}
            >
              <View style={tw`flex-row items-center`}>
                <View style={tw`w-12 h-12 rounded-md bg-black`}></View>

                <View style={tw`ml-2`}>
                  <Text style={tw`text-base text-gray-800 font-bold`}>
                    {u.nama}
                  </Text>
                  <Text style={tw`text-[13px] text-gray-800 font-light`}>
                    {u.role}
                  </Text>
                </View>
              </View>
              <RightDropdown />
            </View>
          );
        })}
    </View>
  );
};

export default MenuDanStock;
