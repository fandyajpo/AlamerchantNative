import React from "react";
import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { RightDropdown } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";

const DiskonMinimumTransaksi = React.memo(({ id, componentId }) => {
  const MoveTo = (route) => () => {
    new Promise.all([
      SheetManager.hide("diskon_minimum_transaksi"),
      PushRoute(componentId, route),
    ]);
  };

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-row items-center p-4`}>
            <Text style={tw`text-gray-800 font-bold text-lg`}>
              Diskon Minimum Transaksi
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={"diskon_minimum_transaksi"}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={MoveTo("PilihMenuPromo")}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Nominal
                  </Text>
                  <Text style={tw`text-gray-300 text-base`}>
                    Diskon dalam nominal dari minimum transaksi.
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={MoveTo("PilihMenuPromo")}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Persentase
                  </Text>
                  <Text style={tw`text-gray-300 text-base`}>
                    Diskon dalam persentase dari minimum transaksi.
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
          </View>

          <View style={tw`pt-4 pl-4 pr-4 pb-12`}>
            <Pressable
              style={tw`w-full bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Kembali</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

registerSheet("diskon_minimum_transaksi", DiskonMinimumTransaksi);

module.exports = {
  DiskonMinimumTransaksi,
};
