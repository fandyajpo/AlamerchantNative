import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import tw from "../../../lib/tailwind";
import { DiscountLable, PilihTanggal } from "../../../lib/listSvg";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";

const DiskonMenu = ({ componentId, pilihTanggalRef }) => {
  const [status, setStatus] = React.useState(false);

  const setStat = React.useCallback((v) => {
    setStatus(v);
  });

  const openSheetPilihTanggal = React.useCallback(() => {
    pilihTanggalRef.current.show();
  }, []);

  return (
    <View style={tw`w-full h-full bg-white`}>
      <View style={tw`px-2`}>
        <Text style={tw`text-gray-800 font-bold text-sm`}>
          Persentase Diskon
        </Text>
        <Text style={tw`text-gray-300  text-sm mb-2`}>
          Harga awal akan dipotong harga dengan persentase.
        </Text>
        <TextInput
          placeholder="Masukkan diskon %"
          style={tw`bg-mgray border border-gray-300 rounded-md h-10`}
        />
      </View>
      <View style={tw`bg-mgray w-full h-2 my-2`} />
      <View style={tw`px-2`}>
        <Text style={tw`text-gray-800 font-bold text-sm mb-2`}>
          Display dan Harga Setelah Diskon
        </Text>
        <View>
          <View style={tw`bg-mgray rounded-t-xl border border-gray-300`}>
            <Text style={tw`text-gray-800 text-sm font-bold px-2 py-1`}>
              5 menu terpilih
            </Text>
          </View>
          <View style={tw`p-2 border rounded-b-xl border-gray-300`}>
            <View
              style={tw`flex-row items-end justify-between p-2 border border-gray-300 rounded-md mb-2`}
            >
              <View style={tw`flex-row`}>
                <View style={tw`mr-2`}>
                  <View style={tw`bg-gray-300 w-14 h-14 rounded-md`} />
                  <View style={tw`absolute bottom-0`}>
                    <DiscountLable />
                  </View>
                </View>
                <View style={tw`mt-2`}>
                  <Text style={tw`text-sm font-bold text-gray-800`}>
                    Iced Americano Rum
                  </Text>
                  <Text style={tw`text-[10px] text-gray-800`}>
                    Americano Coffee with Rum
                  </Text>
                </View>
              </View>
              <Text style={tw`text-gray-800 font-bold text-sm`}>22.000</Text>
            </View>
            <View
              style={tw`flex-row items-end justify-between p-2 border border-gray-300 rounded-md mb-2`}
            >
              <View style={tw`flex-row`}>
                <View style={tw`mr-2`}>
                  <View style={tw`bg-gray-300 w-14 h-14 rounded-md`} />
                  <View style={tw`absolute bottom-0`}>
                    <DiscountLable />
                  </View>
                </View>
                <View style={tw`mt-2`}>
                  <Text style={tw`text-sm font-bold text-gray-800`}>
                    Iced Americano Rum
                  </Text>
                  <Text style={tw`text-[10px] text-gray-800`}>
                    Americano Coffee with Rum
                  </Text>
                </View>
              </View>
              <Text style={tw`text-gray-800 font-bold text-sm`}>22.000</Text>
            </View>
            <View
              style={tw`flex-row items-end justify-between p-2 border border-gray-300 rounded-md mb-2`}
            >
              <View style={tw`flex-row`}>
                <View style={tw`mr-2`}>
                  <View style={tw`bg-gray-300 w-14 h-14 rounded-md`} />
                  <View style={tw`absolute bottom-0`}>
                    <DiscountLable />
                  </View>
                </View>
                <View style={tw`mt-2`}>
                  <Text style={tw`text-sm font-bold text-gray-800`}>
                    Iced Americano Rum
                  </Text>
                  <Text style={tw`text-[10px] text-gray-800`}>
                    Americano Coffee with Rum
                  </Text>
                </View>
              </View>
              <Text style={tw`text-gray-800 font-bold text-sm`}>22.000</Text>
            </View>
            <View
              style={tw`flex-row items-end justify-between p-2 border border-gray-300 rounded-md mb-2`}
            >
              <View style={tw`flex-row`}>
                <View style={tw`mr-2`}>
                  <View style={tw`bg-gray-300 w-14 h-14 rounded-md`} />
                  <View style={tw`absolute bottom-0`}>
                    <DiscountLable />
                  </View>
                </View>
                <View style={tw`mt-2`}>
                  <Text style={tw`text-sm font-bold text-gray-800`}>
                    Iced Americano Rum
                  </Text>
                  <Text style={tw`text-[10px] text-gray-800`}>
                    Americano Coffee with Rum
                  </Text>
                </View>
              </View>
              <Text style={tw`text-gray-800 font-bold text-sm`}>22.000</Text>
            </View>
            <View
              style={tw`flex-row items-end justify-between p-2 border border-gray-300 rounded-md mb-2`}
            >
              <View style={tw`flex-row`}>
                <View style={tw`mr-2`}>
                  <View style={tw`bg-gray-300 w-14 h-14 rounded-md`} />
                  <View style={tw`absolute bottom-0`}>
                    <DiscountLable />
                  </View>
                </View>
                <View style={tw`mt-2`}>
                  <Text style={tw`text-sm font-bold text-gray-800`}>
                    Iced Americano Rum
                  </Text>
                  <Text style={tw`text-[10px] text-gray-800`}>
                    Americano Coffee with Rum
                  </Text>
                </View>
              </View>
              <Text style={tw`text-gray-800 font-bold text-sm`}>22.000</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`bg-mgray w-full h-2 my-2`} />
      <View style={tw`px-2`}>
        <Text style={tw`text-gray-800 font-bold text-sm`}>Jadwalkan</Text>
        <Text style={tw`text-gray-300  text-sm mb-2`}>
          Pilih jadwal tanggal promo Anda.
        </Text>
        <Pressable onPress={openSheetPilihTanggal}>
          <PilihTanggal />
        </Pressable>
      </View>

      <View style={tw`px-2 mt-4`}>
        <Text style={tw`text-gray-800 font-bold text-sm`}>
          Aktifkan Jam Promo
        </Text>

        <View style={tw`flex-col py-2`}>
          <Text style={tw`text-sm text-gray-300 mb-2`}>
            Jika aktif user atau pelanggan bisa mengomentari feed Outlet Anda
          </Text>
          <View style={tw`rounded-full flex-row overflow-hidden w-52 bg-mgray`}>
            <Pressable
              onPress={() => setStat(false)}
              style={tw`${
                status ? "bg-mgray" : "bg-red-500/20"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status ? "bg-gray-300" : "bg-red-500"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status ? "text-gray-300" : "text-red-500 font-bold"
                  }`}
                >
                  Tidak
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => setStat(true)}
              style={tw`${
                status ? "bg-green-500/20" : "bg-mgray"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status ? "bg-green-500" : "bg-gray-300"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status ? "text-green-500 font-bold" : "text-gray-300"
                  }`}
                >
                  Ya
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={tw`px-2 my-2 flex-row`}>
        <View style={tw`flex-col w-27 mr-2`}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Dari</Text>
          <View style={tw`flex-row items-center w-24`}>
            <TextInput
              value="00:00"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-24 px-2`}
            />
            <Text style={tw`ml-2 text-black`}>-</Text>
          </View>
        </View>
        <View style={tw`flex-col `}>
          <Text style={tw`text-gray-800 font-bold text-sm`}>Sampai</Text>
          <TextInput
            value="00:00"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-24 px-2`}
          />
        </View>
      </View>
      <View style={tw`bg-mgray w-full h-2 my-2`} />
      <View style={tw`px-2 mt-2`}>
        <Text style={tw`text-gray-800 font-bold text-sm`}>
          Atur Promo di Alamerchant
        </Text>

        <View style={tw`flex-col py-2`}>
          <Text style={tw`text-sm text-gray-300 mb-2 `}>
            Jika aktif, promo akan diatur juga di Ala Merchant.
          </Text>
          <View style={tw`rounded-full flex-row overflow-hidden w-52 bg-mgray`}>
            <Pressable
              onPress={() => setStat(false)}
              style={tw`${
                status ? "bg-mgray" : "bg-red-500/20"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status ? "bg-gray-300" : "bg-red-500"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status ? "text-gray-300" : "text-red-500 font-bold"
                  }`}
                >
                  Tidak
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => setStat(true)}
              style={tw`${
                status ? "bg-green-500/20" : "bg-mgray"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status ? "bg-green-500" : "bg-gray-300"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status ? "text-green-500 font-bold" : "text-gray-300"
                  }`}
                >
                  Ya
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

DiskonMenu.options = {
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

export default DiskonMenu;
