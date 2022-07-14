import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import {
  RightDropdown,
  DataAnalisa,
  PromoOutletAnda,
  Riwayat,
  DiscountCarte,
  PromoSistemAlacarte,
  PromoSistemVoucherAlacarte,
  PromoEvent,
  PromoImage,
  PromoLable,
  VoucherDiskon1,
  VoucherDiskon2,
} from "../../../lib/listSvg";
import { PushRoute } from "../../../lib/ctx";
import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";

const PromoAlacarte = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white`}>
      <View style={tw`flex-col w-full bg-white`}>
        <View
          style={tw`w-full bg-white rounded-md border border-yellow-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
        >
          <View style={tw`flex-row items-center`}>
            <PromoOutletAnda />
            <View style={tw`ml-2`}>
              <Text style={tw`text-sm text-gray-800 font-bold`}>
                Promo Outlet Anda
              </Text>
              <Text style={tw`text-[13px] text-gray-800 font-light`}>
                Kelola kategori dan menu Anda di sini
              </Text>
            </View>
          </View>
          <RightDropdown />
        </View>
        <View
          style={tw`w-full bg-white rounded-md border border-yellow-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
        >
          <View style={tw`flex-row items-center`}>
            <Riwayat />
            <View style={tw`ml-2`}>
              <Text style={tw`text-sm text-gray-800 font-bold`}>
                Riwayat Promo
              </Text>
              <Text style={tw`text-[13px] text-gray-800 font-light`}>
                Kelola kategori dan menu Anda di sini
              </Text>
            </View>
          </View>
          <RightDropdown />
        </View>
      </View>

      <View style={tw`flex-row items-center px-2`}>
        <DiscountCarte />
        <Text style={tw`text-gray-800 w-2/4`}>
          Tenang, Setiap promo tidak bisa digabungkan. Penggunaan promo pada Ala
          Carte, akan otomatis memilih promo dengan potongan terbesar
        </Text>
      </View>

      <View style={tw`flex-row items-center justify-center mb-2`}>
        <PromoSistemAlacarte />
      </View>

      <Pressable
        onPress={() => PushRoute(componentId, "PilihMenuPromo")}
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Diskon Menu
            </Text>
            <Text
              style={tw`text-[13px] text-gray-800 font-light w-44 sm:w-full`}
            >
              Diskon/harga coret pada menu yang Anda pilih.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
      <Pressable
        onPress={() => SheetManager.show("gratisMenuTertentu")}
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Gratis Menu Tertentu
            </Text>
            <Text
              style={tw`text-[13px] text-gray-800 font-light w-44 sm:w-64`}
              numberOfLines={2}
            >
              Promo dengan minimum total transaksi atau qty menu, gratis menu
              tertentu.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
      <Pressable
        onPress={() => SheetManager.show("diskonMinimumTransaksi")}
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Diskon Minimum Transaksi
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light w-44 sm:w-64`}>
              Diskon dalam nominal atau persentase dari minimum transaksi.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </Pressable>
      <View style={tw`flex-col items-center justify-center mb-4 mt-2`}>
        <PromoSistemVoucherAlacarte />
        <Text style={tw`text-gray-800 mt-1 mb-2 font-light text-base`}>
          Terdapat label di halaman outlet
        </Text>
        <View style={tw`flex-row items-center justify-center`}>
          <View style={tw`mr-1`}>
            <VoucherDiskon1 />
          </View>
          <View style={tw`ml-1`}>
            <VoucherDiskon2 />
          </View>
        </View>
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Diskon Nominal
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light`}>
              Diskon dalam nominal dari minimum transaksi.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Diskon Persentase
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light`}>
              Diskon dalam persentase dari minimum transaksi.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View style={tw`flex-row items-center justify-center mb-2`}>
        <PromoEvent />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Banner Slider
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light w-44 sm:w-64`}>
              Pasang promo outlet Anda di halaman utama Ala Carte.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Banner Square
            </Text>
            <Text
              style={tw`text-[13px] text-gray-800 font-light w-44 sm:w-64`}
              numberOfLines={2}
            >
              Pasang banner pada feed halaman utama Ala Carte
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>Story</Text>
            <Text style={tw`text-[13px] text-gray-800 font-light w-44 sm:w-64`}>
              Pasang promo dalam bentuk story di Ala Carte.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>
              Blast Notif
            </Text>
            <Text style={tw`text-[13px] text-gray-800 font-light w-44 sm:w-64`}>
              Pasang promo dalam bentuk story di Ala Carte.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
      <View
        style={tw`bg-mgray w-full bg-mgray rounded-md border border-gray-300 mb-2 flex-row items-center justify-between p-3 shadow-sm`}
      >
        <View style={tw`flex-row items-center`}>
          <DataAnalisa />
          <View style={tw`ml-2`}>
            <Text style={tw`text-base text-gray-800 font-bold`}>Event</Text>
            <Text style={tw`text-[13px] text-gray-800 font-light w-44 sm:w-64`}>
              Pasang promo dalam bentuk story di Ala Carte.
            </Text>
          </View>
        </View>
        <RightDropdown />
      </View>
    </View>
  );
};

export default React.memo(PromoAlacarte);
