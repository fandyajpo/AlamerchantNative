import React from "react";
import { View, Text } from "react-native";
import tw from "../../lib/tailwind";
import { Plus } from "../../lib/listSvg";

const FlyAction = () => {
  return (
    <View
      style={tw`bg-red-500 absolute w-15 h-15 z-10 bottom-4 right-4  rounded-full items-center justify-center`}
    >
      <Plus col={"w-10 h-10 text-white"} />
    </View>
  );
};

export default React.memo(FlyAction);
