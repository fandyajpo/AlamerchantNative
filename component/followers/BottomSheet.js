import React from "react";
import ActionSheet, {
  SheetManager,
  registerSheet,
} from "react-native-actions-sheet";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { RightDropdown } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";

const Back = (currentSheet, prevSheet) => {
  new Promise.all([
    SheetManager.hide(currentSheet),
    SheetManager.show(prevSheet),
  ]);
};

const Follower = React.memo(({ id, componentId, sheetRef }) => {
  const Remove = React.useCallback(() => {
    new Promise.all([
      SheetManager.hide("follower_bottom_sheet"),
      SheetManager.show("follower_remove_follower"),
    ]);
  }, []);

  const BlockUser = React.useCallback(() => {
    new Promise.all([
      SheetManager.hide("follower_bottom_sheet"),
      SheetManager.show("follower_block_user"),
    ]);
  }, []);

  const AddRoleUser = React.useCallback(() => {
    new Promise.all([
      SheetManager.hide("follower_bottom_sheet"),
      PushRoute(componentId, "AddUserRole"),
    ]);
  }, []);

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
        ref={sheetRef}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={AddRoleUser}
            >
              <View style={tw` flex-row items-center justify-between px-4`}>
                <Text style={tw`text-gray-800 font-bold text-base`}>
                  Beri Peran Follower
                </Text>
                <RightDropdown />
              </View>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-200`}
              onPress={Remove}
            >
              <Text style={tw`text-gray-800 font-bold text-base px-4`}>
                Hapus Follower
              </Text>
            </Pressable>
            <Pressable
              style={tw`py-4 border-b border-gray-300`}
              onPress={BlockUser}
            >
              <Text style={tw`text-gray-800 font-bold text-base px-4`}>
                Block
              </Text>
            </Pressable>
          </View>

          <View style={tw`pt-4 pl-4 pr-4 pb-12`}>
            <Pressable
              onPress={() => SheetManager.hide("follower_block_user")}
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

export const BlockUser = React.memo(({ id, sheetRef }) => {
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
              Anda yakin block user?
            </Text>
            <Text style={tw`text-gray-300`}>
              User akan masuk daftar block Outlet Anda
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        ref={sheetRef}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
            <Pressable
              onPress={() =>
                Back("follower_block_user", "follower_bottom_sheet")
              }
              style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={() => sheetRef.current.hide()}
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

export const RemoveFollower = React.memo(({ id, sheetRef }) => {
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
              Anda yakin hapus follower?
            </Text>
            <Text style={tw`text-gray-300`}>
              User akan dihapus dari daftar followers Outlet Anda
            </Text>
          </View>
        }
        delayActionSheetDraw={0}
        id={id}
        ref={sheetRef}
        bounceOnOpen={true}
        gestureEnabled={true}
        springOffset={100}
      >
        <View style={tw`h-auto`}>
          <View style={tw`pt-4 pl-4 pr-4 pb-12 flex-row justify-center`}>
            <Pressable
              onPress={() =>
                Back("follower_remove_follower", "follower_bottom_sheet")
              }
              style={tw`w-2/4 bg-myellow h-13 rounded-full items-center justify-center `}
            >
              <Text style={tw`text-white text-sm font-bold`}>Kembali</Text>
            </Pressable>
            <View style={tw`w-2`} />
            <Pressable
              onPress={() => SheetManager.hide("follower_remove_follower")}
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

registerSheet("follower", Follower);
registerSheet("remove_follower", RemoveFollower);
registerSheet("block_user", BlockUser);

export default Follower;
