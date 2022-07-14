import { Pressable, View, Text, ScrollView } from "react-native";
import React from "react";
import tw from "../../lib/tailwind";
const PilihMenuSwitch = ({ MenuCategory, menuRef, menu, setMenu }) => {
  const handlerMenu = React.useCallback(
    (index) => () => {
      setMenu(index);
      menuRef.current.setPage(index);
    },
    []
  );
  return (
    <ScrollView
      contentContainerStyle={tw`w-full bg-white px-2 pt-13 pb-36`}
      showsVerticalScrollIndicator={false}
    >
      {MenuCategory.map((t, i) => {
        return (
          <Pressable
            onPress={handlerMenu(i)}
            key={i}
            style={tw`${
              menu === i ? "bg-myellow/40" : ""
            } mb-2 w-16 justify-center items-center rounded-xl overflow-hidden`}
          >
            <View
              style={tw`${
                menu === i ? "bg-blue-500" : ""
              } border border-gray-300 w-12 h-12 rounded-xl flex items-center justify-center mt-2`}
            ></View>
            <Text style={tw`text-gray-800 text-center mt-1`}>{t.type}</Text>
            <View
              style={tw`${
                menu === i ? "bg-myellow" : "bg-gray-300"
              } w-10 h-1 mt-1 rounded-full`}
            />
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default PilihMenuSwitch;
