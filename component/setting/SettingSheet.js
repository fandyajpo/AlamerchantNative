import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { RightDropdown } from "../../lib/listSvg";

const PrinterSheet = React.memo(({ id, printerRef }) => {
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
              Tambah Printer
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={printerRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View>
            <Pressable style={tw`py-4 border-b border-gray-200`}>
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Wifi
                  </Text>
                  <Text style={tw`text-gray-300  text-base`}>
                    Hubungkan printer melalui Wifi
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
            <Pressable style={tw`py-4 border-b border-gray-200`}>
              <View style={tw` flex-row items-center justify-between px-4`}>
                <View>
                  <Text style={tw`text-gray-800 font-bold text-base`}>
                    Bluetooth
                  </Text>
                  <Text style={tw`text-gray-300 text-base`}>
                    Hubungkan printer melalui Bluetooth
                  </Text>
                </View>

                <RightDropdown />
              </View>
            </Pressable>
          </View>

          <View style={tw`pt-4 pl-4 pr-4 pb-12`}>
            <Pressable
              onPress={() => printerRef.current.hide()}
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

const LogoutSheet = React.memo(({ id, logoutRef }) => {
  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-col p-4`}>
            <Text style={tw`text-gray-800 font-bold text-lg`}>
              Anda yakin ingin keluar?
            </Text>
            <Text style={tw`text-gray-300`}>Keluar dari akun</Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={logoutRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
            <Pressable
              onPress={() => logoutRef.current.hide()}
              style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={() => logoutRef.current.hide()}
              style={tw`w-2/4 bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

const LanguageSheet = React.memo(({ id, langRef, lang, setLang }) => {
  const switchLang = React.useCallback(async () => {
    lang === "bahasa"
      ? () => {
          setLang("english");
          langRef.current.hide();
        }
      : () => {
          setLang("bahasa");
          langRef.current.hide();
        };
  }, [lang]);

  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-col p-4`}>
            <Text style={tw`text-gray-800 font-bold text-lg`}>
              Bahasa akan diganti
            </Text>
            <Text style={tw`text-gray-300`}>
              Aku akan memuat ulang setelah menu bahasa di ganti
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={langRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
            <Pressable
              onPress={() => langRef.current.hide()}
              style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={
                lang === "bahasa"
                  ? (e) => {
                      setLang("english");
                      langRef.current.hide(e);
                    }
                  : (r) => {
                      setLang("bahasa");
                      langRef.current.hide(r);
                    }
              }
              style={tw`w-2/4 bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Ok</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

registerSheet("printerSheet", PrinterSheet);
registerSheet("logoutSheet", LogoutSheet);
registerSheet("languageSheet", LanguageSheet);

module.exports = {
  PrinterSheet,
  LogoutSheet,
  LanguageSheet,
};
