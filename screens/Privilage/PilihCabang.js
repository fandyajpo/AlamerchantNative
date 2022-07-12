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
import { BackHandlerPilihCabang } from "../../component/profileMerchant/BackHandler";

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

const PilihCabang = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white pt-10`}>
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
      <BackHandlerPilihCabang componentId={componentId} />
    </View>
  );
};

PilihCabang.options = {
  bottomTabs: {
    visible: false,
    drawBehind: false,
    animate: false,
  },
  topBar: {
    visible: false,
    backButton: {
      visible: false,
    },
  },
  statusBar: {
    drawBehind: true,
    translucent: true,
    style: "dark",
    backgroundColor: "transparent",
  },
  animations: {
    push: {
      waitForRender: true,
      content: {
        translationX: {
          from: require("react-native").Dimensions.get("window").width,
          to: 0,
          duration: 200,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        translationX: {
          from: 0,
          to: require("react-native").Dimensions.get("window").width,
          duration: 200,
        },
      },
    },
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: true,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
  },
};

export default PilihCabang;
