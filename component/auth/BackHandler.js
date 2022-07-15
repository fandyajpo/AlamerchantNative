import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Pressable,
  BackHandler,
  Alert,
} from "react-native";
import tw from "../../lib/tailwind";
import { Back } from "../../lib/listSvg";
import { BackRoute, PushRoute } from "../../lib/ctx";
export const BackHandlerOtp = ({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-44 bg-mgray p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Kirim OTP
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};

export const BackHandlerConfirmPin = ({ componentId }) => {
  return (
    <View
      style={tw`absolute bottom-0 w-full h-44 bg-mgray p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}
        >
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Konfirmasi Pin
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={tw`mt-3 shadow-xl`}
        onPress={() => PushRoute(componentId, "Feed")}
      >
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Konfirmasi</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const BackHandlerDaftar = ({
  componentId,
  ourRef,
  daftar,
  setDaftar,
}) => {
  const BackHandle = (e) => {
    if (daftar > 1) return;

    setDaftar(daftar + 1);
  };

  React.useEffect(() => {
    console.log("NILAI DAFTARs", daftar);
  });

  const Backx = () => {
    if (daftar < 1) BackRoute(componentId);

    setDaftar(daftar - 1);
  };

  React.useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={tw`absolute bottom-0 w-full h-32 bg-mgray p-4 z-50 border-t-2 border-l border-r border-gray-300 rounded-xl`}
    >
      <View style={tw`flex-row items-center justify-between w-full`}>
        <Pressable style={tw`w-2/6 shadow-xl`} onPress={Backx}>
          <Back />
        </Pressable>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-sm sm:text-lg font-bold`}>
            Daftar
          </Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
      <Pressable onPress={BackHandle} style={tw`mt-3 shadow-xl`}>
        <View
          style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
        >
          <Text style={tw`text-sm font-bold`}>Lanjut</Text>
        </View>
      </Pressable>
    </View>
  );
};
