import React from "react";
import { View, Text, TextInput } from "react-native";
import tw from "../../../lib/tailwind";
import { DiscountLable } from "../../../lib/listSvg";

const DiskonMenu = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white`}>
      <Text style={tw`text-gray-800 font-bold text-sm`}>Persentase Diskon</Text>
      <Text style={tw`text-gray-300  text-sm mb-2`}>
        Harga awal akan dipotong harga dengan persentase.
      </Text>
      <TextInput
        placeholder="Masukkan diskon %"
        style={tw`bg-mgray border border-gray-300 rounded-md h-10`}
      />
      <View style={tw`bg-mgray w-full h-2 my-2`} />
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
        </View>

        {/*  */}
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
