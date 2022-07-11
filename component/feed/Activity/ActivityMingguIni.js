import React from "react";
import { View, Text } from "react-native";
import tw from "../../../lib/tailwind";

const SeenActivity = [
  {
    user: "Fena Merlyn",
    method: "mention",
    createdAt: "2 jam",
  },
  {
    user: "Fena Merlyn",
    method: "mention",
    createdAt: "2 jam",
  },
  {
    user: "Fena Merlyn",
    method: "mention",
    createdAt: "2 jam",
  },
];

const ActivityMingguIni = () => {
  return (
    <View style={tw`w-full bg-white`}>
      <Text style={tw`text-gray-800 text-base font-bold mb-2`}>Minggu Ini</Text>
      {SeenActivity.length > 0 &&
        SeenActivity.map((n, i) => {
          return (
            <View
              key={i}
              style={tw`w-full h-auto p-2 mb-2 pb-4 flex-row items-center justify-between border-b border-gray-200`}
            >
              <View style={tw`flex-row items-center`}>
                <View style={tw`bg-black w-12 h-12 rounded-full mr-2`} />
                <View style={tw`w-8/12`}>
                  <Text style={tw`text-gray-800`} numberOfLines={3}>
                    <Text style={tw`font-bold text-gray-800`}>
                      Hilda Arial{" "}
                    </Text>
                    mention outlet anda.{" "}
                    <Text style={tw`text-gray-400`}>2 jam</Text>
                  </Text>
                </View>
              </View>

              <View style={tw`bg-black w-12 h-12 rounded-md`} />
            </View>
          );
        })}
    </View>
  );
};

export default ActivityMingguIni;
