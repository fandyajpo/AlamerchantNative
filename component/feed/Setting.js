import React from "react";
import { View, Text, Pressable } from "react-native";
import tw from "../../lib/tailwind";
import { BlockArrow } from "../../lib/listSvg";
import { PushRoute } from "../../lib/ctx";
const FeedSetting = ({ componentId }) => {
  const [status, setStatus] = React.useState({
    comment: false,
    mention: false,
  });

  const setComment = React.useCallback((v) => {
    setStatus({ ...status, comment: v });
  });

  const setMention = React.useCallback((v) => {
    setStatus({ ...status, mention: v });
  });

  React.useEffect(() => console.log("comment", status.comment));

  return (
    <View style={tw`w-full h-full bg-white`}>
      <View>
        <Text style={tw`text-gray-800 font-bold text-base`}>
          Aktifkan Komentar
        </Text>

        <View style={tw`flex-col border-b py-2 border-mgray`}>
          <Text style={tw`text-base text-gray-300 mb-2 w-9/12`}>
            Jika aktif user atau pelanggan bisa mengomentari feed Outlet Anda
          </Text>
          <View
            style={tw`rounded-full flex-row overflow-hidden w-2/4 bg-mgray`}
          >
            <Pressable
              onPress={() => setComment(false)}
              style={tw`${
                status.comment ? "bg-mgray" : "bg-red-500/20"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status.comment ? "bg-gray-300" : "bg-red-500"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status.comment ? "text-gray-300" : "text-red-500 font-bold"
                  }`}
                >
                  Nonaktif
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => setComment(true)}
              style={tw`${
                status.comment ? "bg-green-500/20" : "bg-mgray"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status.comment ? "bg-green-500" : "bg-gray-300"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status.comment
                      ? "text-green-500 font-bold"
                      : "text-gray-300"
                  }`}
                >
                  Nonaktif
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={tw`bg-mgray w-full h-2 mb-2`} />
      <View>
        <Text style={tw`text-gray-800 font-bold text-base`}>Izin Mention</Text>

        <View style={tw`flex-col border-b py-2 border-mgray`}>
          <Text style={tw`text-base text-gray-300 mb-2`}>
            Fitur ini berfungsi untuk menyaring feed user atau pelanggan yang
            me-mention Outlet Anda.
          </Text>
          <View
            style={tw`rounded-full flex-row overflow-hidden w-2/4 bg-mgray`}
          >
            <Pressable
              onPress={() => setMention(false)}
              style={tw`${
                status.mention ? "bg-mgray" : "bg-red-500/20"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status.mention ? "bg-gray-300" : "bg-red-500"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status.mention ? "text-gray-300" : "text-red-500 font-bold"
                  }`}
                >
                  Nonaktif
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => setMention(true)}
              style={tw`${
                status.mention ? "bg-green-500/20" : "bg-mgray"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status.mention ? "bg-green-500" : "bg-gray-300"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status.mention
                      ? "text-green-500 font-bold"
                      : "text-gray-300"
                  }`}
                >
                  Nonaktif
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={tw`bg-mgray w-full h-2 mb-2`} />

      <Text style={tw`text-gray-800 font-bold text-base`}>Daftar Block</Text>
      <Pressable
        onPress={() => PushRoute(componentId, "BlockUser")}
        style={tw`flex-col border-b py-2 border-mgray`}
      >
        <View
          style={tw`rounded-md flex-row items-center overflow-hidden w-full bg-mgray border border-gray-300 justify-between p-2`}
        >
          <Text style={tw`text-base font-bold text-gray-800`}>
            User atau Pengguna di block
          </Text>
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-myellow w-auto px-2 h-7 rounded-full flex-row items-center justify-center mr-1`}
            >
              <Text style={tw`font-bold text-base`}>84712283827</Text>
            </View>
            <BlockArrow />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default FeedSetting;
