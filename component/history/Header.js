import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";

const Header = ({ typeRef, type, setType }) => {
  const swithcType = React.useCallback((index) => {
    setType(index);
    typeRef.current.setPage(index);
  }, []);

  return (
    <View
      style={tw`h-[7rem] flex flex-row bg-mgray/95 absolute top-0 z-10 w-full px-4 border-b-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row justify-between items-end mb-4 w-full`}>
        <Pressable
          onPress={() => swithcType(0)}
          style={tw`h-8 flex items-center justify-center`}
          activeOpacity={0.5}
        >
          <Text
            style={tw`${
              type === 0
                ? "text-myellow border-myellow border-b-2"
                : "text-gray-800 border-b-0"
            } text-sm font-bold mb-0.5 mx-2 `}
          >
            All
          </Text>
        </Pressable>
        <Pressable
          onPress={() => swithcType(1)}
          style={tw`h-8 flex items-center justify-center`}
          activeOpacity={0.5}
        >
          <Text
            style={tw`${
              type === 1
                ? "text-myellow border-myellow border-b-2"
                : "text-gray-800 border-b-0"
            } text-sm font-bold mb-0.5 mx-2`}
          >
            Rejected
          </Text>
        </Pressable>
        <Pressable
          onPress={() => swithcType(2)}
          style={tw`h-8 flex items-center justify-center`}
          activeOpacity={0.5}
        >
          <Text
            style={tw`${
              type === 2
                ? "text-myellow border-myellow border-b-2"
                : "text-gray-800 border-b-0"
            } text-sm font-bold mb-0.5 mx-2`}
          >
            Canceled
          </Text>
        </Pressable>
        <Pressable
          onPress={() => swithcType(3)}
          style={tw`h-8 flex items-center justify-center`}
          activeOpacity={0.5}
        >
          <Text
            style={tw`${
              type === 3
                ? "text-myellow border-myellow border-b-2"
                : "text-gray-800 border-b-0"
            } text-sm font-bold mb-0.5 mx-2`}
          >
            Order Done
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
export default React.memo(Header);
