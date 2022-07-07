import React, { useCallback } from "react";
import { View, Text, TouchableOpacity, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute } from "../../lib/ctx";
import { Keyboard } from "react-native";

//better add all back handler here

const BackHandlerPrinter = React.memo(({ componentId, printerRef }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
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
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>
            Manage Printer
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-green-500`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => printerRef.current.show()}
      >
        <View
          style={tw`w-full bg-green-500/20 h-13 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-green-500`}>Simpan</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
});

const BackHandlerSetting = React.memo(({ componentId }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
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
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Setting</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

const BackHandlerDebitBank = React.memo(({ componentId }) => {
  const [keyboardShow, setKeyboardShow] = React.useState(false);

  React.useEffect(() => {
    console.log("keyboard printer render");
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
      style={tw`absolute bottom-0 w-full h-32 bg-mgray/20 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity style={tw`w-2/6 shadow-xl`} onPress={backKey}>
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Setting</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
});

module.exports = {
  BackHandlerPrinter,
  BackHandlerSetting,
  BackHandlerDebitBank,
};
