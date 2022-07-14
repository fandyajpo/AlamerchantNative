import React, { useEffect } from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../../lib/tailwind";

const CategorySwitch = ({ statusRef, setStatus, status }) => {
  const moveCategory = React.useCallback((i) => {
    statusRef.current.setPage(i);
    setStatus(i);
  }, []);

  return (
    <View style={tw`flex flex-col justify-center absolute top-0 z-10 w-full`}>
      <View style={tw`w-full flex-row justify-center`}>
        <View
          style={tw`flex-row items-center w-2/4 justify-between bg-mgray rounded-full overflow-hidden shadow-md border border-mgray`}
        >
          <Pressable
            onPress={() => moveCategory(0)}
            style={tw`${
              status === 0 ? "bg-myellow/20" : "bg-mgray"
            } w-2/4 rounded-full items-center justify-center`}
          >
            <Text
              style={tw`${
                status === 0 ? "text-myellow" : "text-gray-800"
              }  py-2.5 font-bold`}
            >
              Aktif
            </Text>
          </Pressable>
          <Pressable
            onPress={() => moveCategory(1)}
            style={tw`${
              status === 1 ? "bg-myellow/20" : "bg-mgray"
            } w-2/4 rounded-full items-center justify-center`}
          >
            <Text
              style={tw`${
                status === 1 ? "text-myellow" : "text-gray-800"
              }  py-2.5 font-bold`}
            >
              Nonaktif
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CategorySwitch;
