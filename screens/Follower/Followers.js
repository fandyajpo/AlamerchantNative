import React from "react";
import { View, VirtualizedList, Text, Pressable } from "react-native";
import BackHandlerFollower from "../../component/followers/BackHandler";
import { Dropdown } from "../../lib/listSvg";
import { SheetManager } from "react-native-actions-sheet";
import tw from "../../lib/tailwind";
import BottomSheet, {
  BlockUser,
  RemoveFollower,
} from "../../component/followers/BottomSheet";

const MemoizeBottomSheet = React.memo(BottomSheet);
const MemoizeRemoveFollower = React.memo(RemoveFollower);
const MemoizeBlockUser = React.memo(BlockUser);

const DATA = [];

const getItem = (data, index) => ({
  key: index,
  id: "32929402",
  title: `Fandy Ahmad ${index + 1}`,
});

const getItemCount = (data) => 10;

const Item = ({ title }) => (
  <View
    style={tw`bg-white border-b border-gray-300 pt-4 flex-row justify-between items-center pb-4 bg-white`}
  >
    <View style={tw`flex-row items-center `}>
      <View style={tw`bg-black w-10 h-10 rounded-full mr-2`} />
      <Text style={tw`text-gray-800 font-bold text-sm`}>{title}</Text>
    </View>
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
      onPress={() => SheetManager.show("follower_bottom_sheet")}
    >
      <Dropdown />
    </Pressable>
  </View>
);

const Followers = ({ componentId }) => {
  const sheetRef = React.useRef(null);
  return (
    <View
      style={tw`mt-13 w-full h-full border-l border-r border-t-2 rounded-xl border-gray-300 pb-44 bg-white`}
    >
      <View style={tw`px-3`}>
        <VirtualizedList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`bg-white w-full h-auto`}
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => <Item title={item.title} />}
          keyExtractor={(item) => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </View>
      <MemoizeBottomSheet
        id={"follower_bottom_sheet"}
        componentId={componentId}
        sheetRef={sheetRef}
      />
      <MemoizeRemoveFollower
        id={"follower_remove_follower"}
        sheetRef={sheetRef}
      />
      <MemoizeBlockUser id={"follower_block_user"} sheetRef={sheetRef} />

      <BackHandlerFollower componentId={componentId} />
    </View>
  );
};

Followers.options = {
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

export default Followers;
