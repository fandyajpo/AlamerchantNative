import React, { useEffect } from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, TextInput, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { RightDropdown } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";
import DatePicker from "react-native-modern-datepicker";

const TaggingSheet = ({ id, editProfileRef }) => {
  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`p-4`}>
            <Text style={tw`text-gray-800 font-bold text-base`}>
              Tambah Tagging
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={editProfileRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`flex-row items-center justify-between px-4`}>
            <TextInput
              placeholder="Tambah tag outlet kamu"
              style={tw`bg-mgray border border-gray-300 rounded-md h-10p px-2 w-full`}
            />
          </View>

          <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
            <Pressable
              onPress={() => editProfileRef.current.hide()}
              style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={() => editProfileRef.current.hide()}
              style={tw`w-2/4 bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

const EditMerchantProfileSheet = ({ id, profileSheetRef, componentId }) => {
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
              Apa yang kamu mau edit?
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={profileSheetRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={() => {
                profileSheetRef.current.hide();
                PushRoute(componentId, "EditProfile");
              }}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Profile
                  </Text>
                  <Text style={tw`text-gray-300  text-base`}>
                    Nama Outlet, Deskripsi, Foto, Outlet Tag
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={() => {
                profileSheetRef.current.hide();
                PushRoute(componentId, "UpdateAlamatOutlet");
              }}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Alamat
                  </Text>
                  <Text style={tw`text-gray-300 text-base`}>
                    Alamat Lengkap, Lokasi Outlet
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={() => {
                profileSheetRef.current.hide();
                PushRoute(componentId, "UpdateOperasional");
              }}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Jam Operasional
                  </Text>
                  <Text style={tw`text-gray-300 text-base`}>
                    Pengaturan Jadwal Harian
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable style={tw`py-4 border-b border-gray-200`}>
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Tipe Servis & Tipe Bayar
                  </Text>
                  <Text style={tw`text-gray-300 text-base`}>
                    Dine In, Takeaway, Take It, Walk In, Delivery, In Room
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={() => {
                profileSheetRef.current.hide();
                PushRoute(componentId, "UpdateGalery");
              }}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Gallery
                  </Text>
                  <Text style={tw`text-gray-300 text-base`}>
                    Upload Gallery Outlet
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
          </View>

          <View style={tw`pt-4 pl-4 pr-4 pb-12`}>
            <Pressable
              onPress={() => profileSheetRef.current.hide()}
              style={tw`w-full bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Kembali</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

const JamOperasionalSheet = ({ id, editJamRef }) => {
  const [time, setTime] = React.useState("");
  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`p-4`}>
            <Text style={tw`text-gray-800 font-bold text-base`}>
              Tambah Tagging
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={editJamRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`flex-row items-center justify-between px-4`}>
            <DatePicker
              style={tw`w-2/4 h-64`}
              reverse={true}
              options={{
                textDefaultColor: "black",
              }}
              mode="time"
              minuteInterval={3}
              onTimeChange={(selectedTime) => setTime(selectedTime)}
            />
            <DatePicker
              style={tw`w-2/4 h-64`}
              reverse={true}
              options={{
                textDefaultColor: "black",
              }}
              mode="time"
              minuteInterval={3}
              onTimeChange={(selectedTime) => setTime(selectedTime)}
            />
          </View>

          <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
            <Pressable
              onPress={() => editJamRef.current.hide()}
              style={tw`w-2/4 bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={() => editJamRef.current.hide()}
              style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Simpan</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
};

registerSheet("taggingSheet", TaggingSheet);
registerSheet("editProfileSheet", EditMerchantProfileSheet);
registerSheet("jamOperasionalSheet", JamOperasionalSheet);

module.exports = {
  TaggingSheet,
  EditMerchantProfileSheet,
  JamOperasionalSheet,
};
