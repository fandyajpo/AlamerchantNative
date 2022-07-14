import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import tw from "../../../lib/tailwind";
import { BlockArrow } from "../../../lib/listSvg";
import { PushRoute } from "../../../lib/ctx";
const FeedSetting = ({ componentId }) => {
  const [status, setStatus] = React.useState({
    status: false,
    color: "black",
  });

  const setStat = React.useCallback((v) => {
    setStatus({ ...status, status: v });
  }, []);

  return (
    <View style={tw`w-full h-full bg-white`}>
      <View style={tw`px-2`}>
        <Text style={tw`text-gray-800 font-bold text-base`}>Status</Text>

        <View style={tw`flex-col border-b py-2 border-mgray`}>
          <Text style={tw`text-base text-gray-300 mb-2 w-9/12`}>
            Jika aktif user atau pelanggan bisa mengomentari feed Outlet Anda
          </Text>
          <View style={tw`rounded-full flex-row overflow-hidden w-52 bg-mgray`}>
            <Pressable
              onPress={() => setStat(false)}
              style={tw`${
                status.status ? "bg-mgray" : "bg-red-500/20"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status.status ? "bg-gray-300" : "bg-red-500"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status.status ? "text-gray-300" : "text-red-500 font-bold"
                  }`}
                >
                  Nonaktif
                </Text>
              </View>
            </Pressable>
            <Pressable
              onPress={() => setStat(true)}
              style={tw`${
                status.status ? "bg-green-500/20" : "bg-mgray"
              }  w-2/4 rounded-full h-9`}
            >
              <View style={tw`flex-row items-center h-full`}>
                <View
                  style={tw`${
                    status.status ? "bg-green-500" : "bg-gray-300"
                  }  w-3 h-3 rounded-full mx-3`}
                />
                <Text
                  style={tw`${
                    status.status ? "text-green-500 font-bold" : "text-gray-300"
                  }`}
                >
                  Aktif
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>

      <View style={tw`bg-mgray w-full h-2 mb-2`} />
      <View style={tw`px-2`}>
        <Text style={tw`text-gray-800 font-bold text-base`}>Nama</Text>
        <View style={tw`flex-col py-2`}>
          <Text style={tw`text-base text-gray-300 mb-2 w-9/12`}>
            Nama kategori yang sesuai sama isi menu Anda.
          </Text>
          <TextInput
            placeholder="Nama Kategori"
            style={tw`bg-mgray border border-gray-300 rounded-md h-10`}
          />
        </View>
      </View>
      <View style={tw`px-2`}>
        <Text style={tw`text-gray-800 font-bold text-base`}>
          Pilih Label Warna
        </Text>
        <View style={tw`flex-col py-2`}>
          <Text style={tw`text-base text-gray-300 mb-2 w-9/12`}>
            Kategori akan diberi label warna, agar Anda lebih mudah saat
            operasional.
          </Text>
        </View>
        <View style={{ flexDirection: "row", flex: 1 }}>
          <View
            style={[
              { flex: 1, backgroundColor: "black" },
              tw`w-8 h-8 mr-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#FC4041" },
              tw`w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#AD7AEE" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#EB996E" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#02AF57" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#0399CD" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#C1750B" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
        </View>
        <View style={[{ flexDirection: "row", flex: 1 }, tw`mt-2`]}>
          <View
            style={[
              { flex: 1, backgroundColor: "#185B7A" },
              tw`w-8 h-8 mr-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#FF8BEC" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#F3990B" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#5A2C05" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#00562A" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#A8AEB8" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
          <View
            style={[
              { flex: 1, backgroundColor: "#B47479" },
              tw` w-8 h-8 mx-1 rounded-md`,
            ]}
          />
        </View>
      </View>
    </View>
  );
};

export default FeedSetting;
