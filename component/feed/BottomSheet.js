import React from "react";
import ActionSheet, { registerSheet } from "react-native-actions-sheet";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";

const UnBlockSheet = React.memo(({ id, unBlockRef }) => {
  return (
    <View style={tw`absolute bottom-0`}>
      <ActionSheet
        bounciness={5}
        closeAnimationDuration={200}
        indicatorColor={"blue"}
        delayActionSheetDrawTime={0}
        CustomHeaderComponent={
          <View style={tw`flex-col p-4`}>
            <Text style={tw`text-gray-800 font-bold text-lg`}>Buka block?</Text>
            <Text style={tw`text-gray-300`}>
              Pengguna akan kembali dapat melihat atau mengikuti outlet anda
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        bounceOnOpen={true}
        ref={unBlockRef}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
            <Pressable
              onPress={() => unBlockRef.current.hide()}
              style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={() => unBlockRef.current.hide()}
              style={tw`w-2/4 bg-mgray h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-myellow text-sm font-bold`}>Buka Block</Text>
            </Pressable>
          </View>
        </View>
      </ActionSheet>
    </View>
  );
});

registerSheet("languageSheet", UnBlockSheet);

export default UnBlockSheet;
