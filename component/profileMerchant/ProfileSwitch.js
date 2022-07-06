import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";

const FeedSwitch = ({ profileRef, setProfilePage, profilePage }) => {
  const moveProfile = React.useCallback((i) => {
    profileRef.current.setPage(i);
    setProfilePage(i);
  }, []);

  return (
    <View style={tw`flex flex-col justify-center absolute top-0 z-10 w-full`}>
      <View style={tw`border-b border-gray-300 my-2`} />
      <View style={tw`w-full flex-row justify-center`}>
        <View
          style={tw`flex-row items-center w-2/4 justify-between bg-mgray rounded-full overflow-hidden shadow-md border border-mgray`}
        >
          <Pressable
            onPress={() => moveProfile(0)}
            style={tw`${
              profilePage === 0 ? "bg-myellow/20" : ""
            } w-2/4 rounded-full items-center justify-center`}
          >
            <Text
              style={tw`${
                profilePage === 0 ? "text-myellow" : "text-gray-800"
              }  py-2.5 font-bold`}
            >
              Outlet
            </Text>
          </Pressable>
          <Pressable
            onPress={() => moveProfile(1)}
            style={tw`${
              profilePage === 1 ? "bg-myellow/20" : ""
            } w-2/4 rounded-full items-center justify-center`}
          >
            <Text
              style={tw`${
                profilePage === 1 ? "text-myellow" : "text-gray-800"
              }  py-2.5 font-bold`}
            >
              Info
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default FeedSwitch;
