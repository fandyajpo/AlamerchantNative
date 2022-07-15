import React from "react";
import tw from "../../lib/tailwind";
import { BackRoute, PushRoute } from "../../lib/ctx";
import { View, Text, Pressable, Keyboard } from "react-native";
import { Back, Search } from "../../lib/listSvg";
export const BackHandlerPromoAlacarte = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-44 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6`} onPress={() => BackRoute(componentId)}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Promo Alacarte
          </Text>
          <View style={tw`h-0.5 w-full rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6 `} />
      </View>
    </View>
  );
});

export const BackHandlerPromoAlamerchant = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-44 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6`} onPress={() => BackRoute(componentId)}>
          <Back />
        </Pressable>
        <View style={tw`w-auto h-8`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Promo Alamerchant
          </Text>
          <View style={tw`h-0.5 w-full rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6 `} />
      </View>
    </View>
  );
});

export const BackHandlerPilihMenu = React.memo(({ componentId }) => {
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-32 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6`} onPress={() => BackRoute(componentId)}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8`}>
          <Text
            style={tw`text-gray-800 text-sm sm:text-lg font-bold text-center`}
          >
            Pilih Menu
          </Text>
          <View style={tw`h-0.5 w-full rounded-full bg-myellow`} />
        </View>
        <Pressable style={tw`w-2/6 flex-row justify-end`}>
          <Search />
        </Pressable>
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => PushRoute(componentId, "DiskonMenu")}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>Simpan</Text>
        </View>
      </Pressable>
    </View>
  );
});

export const BackHandlerDiskonMenu = React.memo(({ componentId }) => {
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

  const backKey = React.useCallback(() => {
    keyboardShow ? Keyboard.dismiss() : BackRoute(componentId);
  });
  return (
    <View
      style={tw`absolute bg-white bottom-0 w-full h-44 p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between`}>
        <Pressable style={tw`w-2/6`} onPress={backKey}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8`}>
          <Text
            style={tw`text-gray-800 text-sm sm:text-lg font-bold text-center`}
          >
            Diskon Menu
          </Text>
          <View style={tw`h-0.5 w-full rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6 h-2`} />
      </View>
      <Pressable
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => PushRoute(componentId, "DiskonMenu")}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold text-white`}>
            Simpan & buat Promo
          </Text>
        </View>
      </Pressable>
    </View>
  );
});
