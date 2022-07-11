import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";
import {
  MenuAktif,
  ModifierAktif,
  SoldOut,
  RightDropdown,
  DataAnalisa,
  MultiMenu,
} from "../../../lib/listSvg";

const MenuDanStock = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white`}>
      <View style={tw`flex-row justify-between w-full bg-white mb-2`}>
        <View
          style={[
            { flex: 1 },
            tw`w-full h-20 bg-white rounded-xl items-center justify-center border-r-4 border-white`,
          ]}
        >
          <View
            style={[
              { flex: 1 },
              tw`w-full h-full bg-mgray  rounded-xl items-center flex-row border border-gray-300 shadow-sm`,
            ]}
          >
            <View style={tw`px-3`}>
              <MenuAktif />
            </View>
            <View>
              <Text style={tw`text-gray-800 text-[8px] sm:text-[12px]`}>
                Total Menu Aktif
              </Text>
              <Text style={tw`text-gray-800 text-2xl font-semibold`}>73</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            { flex: 1 },
            tw`w-full h-20 bg-white rounded-xl items-center justify-center border-l-4 border-white`,
          ]}
        >
          <View
            style={[
              { flex: 1 },
              tw`w-full h-full bg-mgray  rounded-xl items-center flex-row border border-gray-300 shadow-sm`,
            ]}
          >
            <View style={tw`px-3`}>
              <ModifierAktif />
            </View>
            <View>
              <Text style={tw`text-gray-800 text-[8px] sm:text-[12px]`}>
                Total Modifier Aktif
              </Text>
              <Text style={tw`text-gray-800 text-2xl font-semibold`}>73</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={tw`flex-row justify-between w-full bg-white mb-4 border-b pb-4 border-gray-300`}
      >
        <View
          style={[
            { flex: 1 },
            tw`w-full h-20 bg-white rounded-xl items-center justify-center border-r-4 border-white `,
          ]}
        >
          <View
            style={[
              { flex: 1 },
              tw`w-full h-full bg-mgray  rounded-xl items-center flex-row border border-gray-300 shadow-sm`,
            ]}
          >
            <View style={tw`px-3`}>
              <MultiMenu />
            </View>
            <View>
              <Text style={tw`text-gray-800 text-[8px] sm:text-[12px]`}>
                Total Menu Aktif
              </Text>
              <Text style={tw`text-gray-800 text-2xl font-semibold`}>73</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            { flex: 1 },
            tw`w-full h-20 bg-white rounded-xl items-center justify-center border-l-4 border-white`,
          ]}
        >
          <View
            style={[
              { flex: 1 },
              tw`w-full h-full bg-mgray  rounded-xl items-center flex-row border border-gray-300 shadow-sm`,
            ]}
          >
            <View style={tw`px-3`}>
              <SoldOut />
            </View>
            <View>
              <Text
                style={tw`text-gray-800 text-[8px] sm:text-[12px]`}
                numberOfLines={2}
              >
                Menu dan Modifier sold out
              </Text>
              <Text style={tw`text-gray-800 text-2xl font-semibold`}>73</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <MenuAktif col={48} />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Kategori dan Menu
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light`}>
              Kelola kategori dan menu Anda di sini
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <ModifierAktif col={48} />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Multi Modifier
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light`}>
              Kelola kategori dan menu Anda di sini
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <MultiMenu col={48} />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Multi Menu
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light`}>
              Kelola kategori dan menu Anda di sini
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <SoldOut col={48} />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Stock Menu
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light`}>
              Kelola kategori dan menu Anda di sini
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa col={48} />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Data Analisa
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light`}>
              Kelola kategori dan menu Anda di sini
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
    </View>
  );
};

export default MenuDanStock;
