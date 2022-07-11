import React from "react";
import { View, Animated } from "react-native";
import tw from "../../lib/tailwind";
import { Plus } from "../../lib/listSvg";

const FlyAction = () => {
  return (
    <Animated.View
      style={tw`bg-black/20 absolute w-15 h-15 z-10 bottom-4 right-4  rounded-full items-center justify-center`}
    >
      <Plus col={"w-10 h-10 text-gray-800"} />
    </Animated.View>
  );
};

export default React.memo(FlyAction);
