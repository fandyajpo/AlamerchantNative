import React, { useEffect } from "react";
import { View, Text, ScrollView, TextInput, Pressable } from "react-native";
import { BackHandlerEditProfile } from "../../component/profileMerchant/BackHandler";
import { JamOperasionalSheet } from "../../component/profileMerchant/BottomSheet";
import tw from "../../lib/tailwind";
import { CalenderIcon } from "../../lib/listSvg";

const UpdateJamOperasi = ({ componentId }) => {
  const editJamRef = React.useRef(null);
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView style={tw`mb-32`}>
        <View style={tw`p-2 `}>
          <View style={tw`flex-row`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 font-bold text-sm ml-2`}>Senin</Text>
          </View>
          <View style={tw`flex-row w-full justify-around`}>
            <View>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Buka</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
            <Text style={tw`text-gray-300 text-2xl`}>-</Text>
            <View style={tw``}>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Tutup</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2 `}>
          <View style={tw`flex-row`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 font-bold text-sm ml-2`}>Selasa</Text>
          </View>
          <View style={tw`flex-row w-full justify-around`}>
            <View>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Buka</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
            <Text style={tw`text-gray-300 text-2xl`}>-</Text>
            <View style={tw``}>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Tutup</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2 `}>
          <View style={tw`flex-row`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 font-bold text-sm ml-2`}>Rabu</Text>
          </View>
          <View style={tw`flex-row w-full justify-around`}>
            <View>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Buka</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
            <Text style={tw`text-gray-300 text-2xl`}>-</Text>
            <View style={tw``}>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Tutup</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2 `}>
          <View style={tw`flex-row`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 font-bold text-sm ml-2`}>Kamis</Text>
          </View>
          <View style={tw`flex-row w-full justify-around`}>
            <View>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Buka</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
            <Text style={tw`text-gray-300 text-2xl`}>-</Text>
            <View style={tw``}>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Tutup</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2 `}>
          <View style={tw`flex-row`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 font-bold text-sm ml-2`}>Jum'at</Text>
          </View>
          <View style={tw`flex-row w-full justify-around`}>
            <View>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Buka</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
            <Text style={tw`text-gray-300 text-2xl`}>-</Text>
            <View style={tw``}>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Tutup</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2 `}>
          <View style={tw`flex-row`}>
            <CalenderIcon />
            <Text style={tw`text-gray-800 font-bold text-sm ml-2`}>Sabtu</Text>
          </View>
          <View style={tw`flex-row w-full justify-around`}>
            <View>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Buka</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
            <Text style={tw`text-gray-300 text-2xl`}>-</Text>
            <View style={tw``}>
              <Text style={tw`text-gray-800 font-bold mb-2`}>Tutup</Text>
              <Pressable onPress={() => editJamRef.current.show()}>
                <TextInput
                  editable={false}
                  placeholder={"00:00 WIB"}
                  style={tw`bg-mgray border border-gray-300 rounded-md h-10 w-full px-2 `}
                />
              </Pressable>
            </View>
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
      </ScrollView>
      <JamOperasionalSheet editJamRef={editJamRef} />

      <BackHandlerEditProfile
        componentId={componentId}
        title={"Jam Operasional"}
      />
    </View>
  );
};

UpdateJamOperasi.options = {
  bottomTabs: {
    visible: false,
    drawBehind: false,
    animate: false,
  },
  topBar: {
    visible: false,
    backButton: {
      visible: false,
    },
  },
  statusBar: {
    drawBehind: true,
    translucent: true,
    style: "dark",
    backgroundColor: "transparent",
  },
  animations: {
    push: {
      waitForRender: true,
      content: {
        translationX: {
          from: require("react-native").Dimensions.get("window").width,
          to: 0,
          duration: 200,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        translationX: {
          from: 0,
          to: require("react-native").Dimensions.get("window").width,
          duration: 200,
        },
      },
    },
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: true,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
  },
};

export default UpdateJamOperasi;
