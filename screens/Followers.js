import React from "react";
import { View, VirtualizedList, Text, Pressable } from "react-native";
import BackHandlerComponent from "../component/followers/BackHandler";
import { Dropdown } from "../lib/listSvg";
import tw from "../lib/tailwind";
import BottomSheet from "../component/followers/BottomSheet";

const MemoizeBottomSheet = React.memo(({ sheetRef }) => {
  return <BottomSheet sheetRef={sheetRef} />;
});

const DATA = [];

const getItem = (data, index) => ({
  key: index,
  id: "32929402",
  title: `Fandy Ahmad ${index + 1}`,
});

const getItemCount = (data) => 10;

const Item = ({ title, sheetRef }) => (
  <View
    style={tw`bg-white border-b border-gray-300 pt-4 flex-row justify-between items-center pb-4 bg-white`}
  >
    <View style={tw`flex-row items-center `}>
      <View style={tw`bg-black w-10 h-10 rounded-full mr-2`} />
      <Text style={tw`text-gray-800 font-bold text-sm`}>{title}</Text>
    </View>
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}
      onPress={() => sheetRef.current.show()}
    >
      <Dropdown />
    </Pressable>
  </View>
);

const Followers = ({ componentId }) => {
  const sheetRef = React.useRef(null);
  return (
    <View
      style={tw`mt-13 w-full border-l border-r border-t-2 rounded-xl border-gray-300 pb-32 bg-white`}
    >
      <View style={tw`px-3`}>
        <VirtualizedList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={tw`bg-white w-full h-auto`}
          data={DATA}
          initialNumToRender={4}
          renderItem={({ item }) => (
            <Item title={item.title} sheetRef={sheetRef} />
          )}
          keyExtractor={(item) => item.key}
          getItemCount={getItemCount}
          getItem={getItem}
          // ListFooterComponent={}
        />
      </View>
      <MemoizeBottomSheet sheetRef={sheetRef} />
      <BackHandlerComponent componentId={componentId} />
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
