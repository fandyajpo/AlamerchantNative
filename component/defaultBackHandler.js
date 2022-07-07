import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import tw from "../lib/tailwind";
import { Back } from "../lib/listSvg";
import { BackRoute } from "../lib/ctx";
import { Keyboard } from "react-native";
const BackHandlerComponent = ({ componentId, title, button, buttonTitle }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard render");
  });

  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardShow(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const backKey = useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>{title}</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};

export default React.memo(BackHandlerComponent);
