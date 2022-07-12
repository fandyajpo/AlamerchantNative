import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import {
  MenuAktif,
  ModifierAktif,
  SoldOut,
  RightDropdown,
  DataAnalisa,
  MultiMenu,
  PromoOutletAnda,
  Riwayat,
  DiscountCarte,
  PromoSistemAlacarte,
  PromoEvent,
} from "../../lib/listSvg";

const PromoAlacarte = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white`}>
      <View style={tw`flex-row justify-between w-full bg-white`}>
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
            <View style={tw`px-2`}>
              <PromoOutletAnda />
            </View>
            <View>
              <Text style={tw`text-gray-800 text-sm font-bold w-16`}>
                Promo Outlet Anda
              </Text>
              <Text
                style={tw`text-gray-800 text-[8px] sm:text-[12px] w-14`}
                numberOfLines={2}
              >
                Lihat riwayat promo disini
              </Text>
            </View>
            <View style={tw`pl-1`}>
              <RightDropdown />
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
            <View style={tw`px-2`}>
              <Riwayat />
            </View>
            <View>
              <Text style={tw`text-gray-800 text-sm font-bold w-16`}>
                Riwayat
              </Text>
              <Text
                style={tw`text-gray-800 text-[8px] sm:text-[12px] w-14`}
                numberOfLines={2}
              >
                Lihat riwayat promo disini
              </Text>
            </View>
            <View style={tw`pl-1`}>
              <RightDropdown />
            </View>
          </View>
        </View>
      </View>

      <View style={tw`flex-row items-center px-2`}>
        <DiscountCarte />
        <Text style={tw`text-gray-800 w-2/4`}>
          Tenang, Setiap promo tidak bisa digabungkan. Penggunaan promo pada Ala
          Carte, akan otomatis memilih promo dengan potongan terbesar
        </Text>
      </View>

      <View style={tw`flex-row items-center justify-center mb-4`}>
        <PromoSistemAlacarte />
        <View />
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
      <View style={tw`flex-row items-center justify-center mb-4 mt-2`}>
        <PromoEvent />
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

export default PromoAlacarte;
