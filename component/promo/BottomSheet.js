import React from "react";
import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { RightDropdown } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";
import DatePicker from "react-native-modern-datepicker";

const MemoizeDatePicker = React.memo(DatePicker);

export const DiskonMinimumTransaksi = React.memo(({ id, componentId }) => {
  const MoveTo = (route) => () => {
    new Promise.all([
      SheetManager.hide("diskonMinimumTransaksi"),
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
        id={"diskonMinimumTransaksi"}
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

export const DiskonMenuPilihTanggal = React.memo(
  ({ id, componentId, pilihTanggalRef }) => {
    return (
      <View style={tw`absolute bottom-0`}>
        <ActionSheet
          bounciness={5}
          closeAnimationDuration={200}
          indicatorColor={"blue"}
          delayActionSheetDrawTime={0}
          CustomHeaderComponent={
            <View style={tw`p-4 flex-row items-center justify-around`}>
              <Text
                style={tw`text-gray-800 font-bold text-base bg-yellow-500  py-2 text-center`}
              >
                Dari
              </Text>
              <Text
                style={tw`text-gray-800 font-bold text-base bg-yellow-500 w-24`}
              >
                Sampai
              </Text>
            </View>
          }
          delayActionSheetDraw={0}
          id={id}
          ref={pilihTanggalRef}
          bounceOnOpen={true}
          gestureEnabled={true}
          springOffset={100}
        >
          <View style={tw`h-auto`}>
            <View style={tw`flex-row items-center justify-between px-4`}>
              <MemoizeDatePicker
                options={{
                  backgroundColor: "#090C08",
                  textHeaderColor: "#FFA25B",
                  textDefaultColor: "#F6E7C1",
                  selectedTextColor: "#fff",
                  mainColor: "#F4722B",
                  textSecondaryColor: "#D6C7A1",
                  borderColor: "rgba(122, 146, 165, 0.1)",
                }}
                current="2020-07-13"
                selected="2020-07-23"
                mode="calendar"
                minuteInterval={30}
                style={{ borderRadius: 10 }}
              />
            </View>

            <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
              <Pressable
                style={tw`w-2/4 bg-mgray h-13 rounded-full items-center justify-center `}
              >
                <Text style={tw`text-myellow text-sm font-bold`}>Kembali</Text>
              </Pressable>
              <View style={tw`w-2`} />
              <Pressable
                style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
              >
                <Text style={tw`text-white text-sm font-bold`}>Simpan</Text>
              </Pressable>
            </View>
          </View>
        </ActionSheet>
      </View>
    );
  }
);

export const GratisMenuTertentu = React.memo(({ id, componentId }) => {
  const MoveTo = (route) => () => {
    new Promise.all([
      SheetManager.hide("gratisMenuTertentu"),
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
              Gratis Menu Tertentu
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={"gratisMenuTertentu"}
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
                    Gratis Dengan Menu
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

registerSheet("diskonMinimumTransaksi", DiskonMinimumTransaksi);
registerSheet("diskonMenuPilihTanggal", DiskonMenuPilihTanggal);
registerSheet("gratisMenuTertentu", GratisMenuTertentu);
