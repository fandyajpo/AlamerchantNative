import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import {
  Star,
  EditProfile,
  Message,
  Activity,
  Settings,
} from "../../lib/listSvg";
const FeedSwitch = ({ feedRef, feedSwitch, setFeedSwitch }) => {
  const moveNav = React.useCallback((i) => {
    feedRef.current.setPage(i);
    setFeedSwitch(i);
  }, []);

  return (
    <View style={tw`flex flex-col justify-center absolute top-0 z-10 w-full`}>
      <View style={tw`border-b border-gray-300 my-2`} />
      <View style={tw`w-full flex-row`}>
        <View
          style={tw`flex-row items-center w-3/4 justify-between bg-mgray rounded-full overflow-hidden shadow-md border border-mgray`}
        >
          <Pressable
            onPress={() => moveNav(0)}
            style={tw`${
              feedSwitch === 0 ? "bg-myellow/20" : "bg-transparent"
            } w-1/3 rounded-full items-center justify-center`}
          >
            <Text
              style={tw`${
                feedSwitch === 0 ? "text-myellow" : "text-gray-800"
              } py-2.5 font-bold`}
            >
              Feed
            </Text>
          </Pressable>
          <Pressable
            onPress={() => moveNav(1)}
            style={tw`${
              feedSwitch === 1 ? "bg-myellow/20" : "bg-transparent"
            } w-1/3 rounded-full items-center justify-center`}
          >
            <Text
              style={tw`${
                feedSwitch === 1 ? "text-myellow" : "text-gray-800"
              } py-2.5 font-bold`}
            >
              Event
            </Text>
          </Pressable>
          <Pressable
            onPress={() => moveNav(2)}
            style={tw`${
              feedSwitch === 2 ? "bg-myellow/20" : "bg-transparent"
            } w-1/3 rounded-full items-center justify-center`}
          >
            <Text
              style={tw`${
                feedSwitch === 2 ? "text-myellow" : "text-gray-800"
              } py-2.5 font-bold`}
            >
              Mention
            </Text>
          </Pressable>
          <View style={tw`w-[1px] h-auto bg-gray-300 ml-2`} />
          <View style={tw`w-full flex-row items-center`}>
            <View style={tw`flex-row items-center w-1/4 justify-around`}>
              <Pressable style={tw`bg-myellow/10`}>
                <Activity />
              </Pressable>
              <Pressable style={tw`bg-myellow/10`}>
                <Settings />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw`w-[1px] h-auto bg-gray-300 ml-2`} />
        <View style={tw`w-full flex-row items-center`}>
          <View style={tw`flex-row items-center w-1/4 justify-around`}>
            <Pressable style={tw`bg-myellow/10`}>
              <Activity />
            </Pressable>
            <Pressable style={tw`bg-myellow/10`}>
              <Settings />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedSwitch;
