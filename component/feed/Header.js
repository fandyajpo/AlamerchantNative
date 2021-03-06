import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tw from "../../lib/tailwind";
import { useDeviceContext } from "twrnc";
import {
  Star,
  EditProfile,
  Message,
  Activity,
  Settings,
} from "../../lib/listSvg";
import FeedSwitch from "./FeedSwitch";
import { PushRoute } from "../../lib/ctx";

const Header = ({ componentId }) => {
  useDeviceContext(tw);

  return (
    <View
      style={tw`h-[15rem] flex flex-col justify-center bg-mgray/95 absolute top-0 z-10 w-full px-4`}
    >
      <View style={tw`flex-col justify-center items-center mb-4 w-full pt-10`}>
        <View style={tw`flex-row justify-between w-full`}>
          <View style={tw`flex-row items-center`}>
            <View style={tw`mr-4`}>
              <View style={tw`w-20 h-20 rounded-full shadow-md shadow-sm `}>
                <Image
                  style={tw`w-full h-full`}
                  resizeMode="cover"
                  source={{
                    uri: "https://cdn.discordapp.com/attachments/957998627928817684/993405757213134938/redwhite.png",
                  }}
                />
              </View>
              <View style={tw`absolute bottom-0 right-1 z-10 rounded-full`}>
                <EditProfile />
              </View>
            </View>
            <View>
              <Text style={tw`text-xl font-bold text-gray-800`}>
                Redwhite Coffee
              </Text>
              <Text style={tw`text-sm font-light text-gray-800`}>
                Coffeeshop
              </Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.5}>
            <Message />
          </TouchableOpacity>
        </View>
      </View>

      <View style={tw`flex-row items-center`}>
        <View style={tw`flex-row items-center`}>
          <Text style={tw`text-gray-800 text-base font-bold mr-1`}>4.5</Text>
          <Star />
        </View>
        <View style={tw`w-[1px] h-6 bg-gray-300 mx-2`} />
        <TouchableOpacity onPress={() => PushRoute(componentId, "Followers")}>
          <Text style={tw`text-myellow text-base font-bold`}>
            1004 Followers
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`w-full flex-row pb-12`}></View>
    </View>
  );
};
export default React.memo(Header);
