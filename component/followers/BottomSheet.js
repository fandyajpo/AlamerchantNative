import React from "react";
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Button, TouchableOpacity } from "react-native";
import tw from "../../lib/tailwind";
import { RightDropdown } from "../../lib/listSvg";

function Follower({ id, sheetRef }) {
  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-row items-center p-4`}>
            <View style={tw`bg-black w-14 h-14 rounded-full mr-2`} />
            <Text style={tw`text-gray-800 font-bold text-base`}>
              Lalisa Cantik
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={sheetRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View>
            <TouchableOpacity style={tw`py-4 border-b border-gray-200`}>
              <View style={tw` flex-row items-center justify-between px-4`}>
                <Text style={tw`text-gray-800 font-bold text-base`}>
                  Beri Peran Follower
                </Text>
                <RightDropdown />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={tw`py-4 border-b border-gray-200`}>
              <Text style={tw`text-gray-800 font-bold text-base px-4`}>
                Hapus Follower
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`py-4 border-b border-gray-300`}>
              <Text style={tw`text-gray-800 font-bold text-base px-4`}>
                Block
              </Text>
            </TouchableOpacity>
          </View>

          <View style={tw`pt-4 pl-4 pr-4 pb-12`}>
            <TouchableOpacity
              onPress={() => sheetRef.current.hide()}
              style={tw`w-full bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Kembali</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
}

registerSheet("follower", Follower);

export default React.memo(Follower);
