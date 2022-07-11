import React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import tw from "../../lib/tailwind";
import { Bank, Delete, Add } from "../../lib/listSvg";
import { BackHandlerDebitBank } from "../../component/profileMerchant/BackHandler";

const MemoizeBackHandlerDebitBank = ({ componentId }) => {
  return <BackHandlerDebitBank componentId={componentId} />;
};

const DebitBank = ({ componentId }) => {
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView contentContainerStyle={tw`pb-32 h-full`}>
        {React.useMemo(() => {
          return (
            <>
              <Text style={tw`text-gray-800 font-bold text-sm px-4`}>
                Bank kamu pilih
              </Text>
              <View style={tw`p-2 border-b border-mgray py-3`}>
                <View style={tw`flex-row items-center justify-between `}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`mx-2 border border-gray-300 rounded-md`}>
                      <Bank />
                    </View>
                    <Text style={tw`text-gray-800 font-bold text-xs`}>
                      Bank Central Asia
                    </Text>
                  </View>
                  <Delete />
                </View>
              </View>
              <View style={tw`p-2 border-b border-mgray py-3`}>
                <View style={tw`flex-row items-center justify-between `}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`mx-2 border border-gray-300 rounded-md`}>
                      <Bank />
                    </View>
                    <Text style={tw`text-gray-800 font-bold text-xs`}>
                      Bank Rakyat Indonesia
                    </Text>
                  </View>
                  <Delete />
                </View>
              </View>
              <View style={tw`p-2 border-b border-mgray py-3`}>
                <View style={tw`flex-row items-center justify-between `}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`mx-2 border border-gray-300 rounded-md`}>
                      <Bank />
                    </View>
                    <Text style={tw`text-gray-800 font-bold text-xs`}>
                      Bank BTN
                    </Text>
                  </View>
                  <Delete />
                </View>
              </View>
              <View style={tw`p-2 border-b border-mgray py-3`}>
                <View style={tw`flex-row items-center justify-between `}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`mx-2 border border-gray-300 rounded-md`}>
                      <Bank />
                    </View>
                    <Text style={tw`text-gray-800 font-bold text-xs`}>
                      Bank Fan
                    </Text>
                  </View>
                  <Delete />
                </View>
              </View>
              <View style={tw`bg-mgray w-full h-2 mb-2`} />
              <Text style={tw`text-gray-800 font-bold text-sm px-4`}>
                Bank yang tersedia
              </Text>
              <View style={tw`p-2 border-b border-mgray py-3`}>
                <View style={tw`flex-row items-center justify-between `}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`mx-2 border border-gray-300 rounded-md`}>
                      <Bank />
                    </View>
                    <Text style={tw`text-gray-800 font-bold text-xs`}>
                      Bank Central Asia
                    </Text>
                  </View>
                  <Add />
                </View>
              </View>
              <View style={tw`p-2 border-b border-mgray py-3`}>
                <View style={tw`flex-row items-center justify-between `}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`mx-2 border border-gray-300 rounded-md`}>
                      <Bank />
                    </View>
                    <Text style={tw`text-gray-800 font-bold text-xs`}>
                      Bank Rakyat Indonesia
                    </Text>
                  </View>
                  <Add />
                </View>
              </View>
              <View style={tw`p-2 border-b border-mgray py-3`}>
                <View style={tw`flex-row items-center justify-between `}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`mx-2 border border-gray-300 rounded-md`}>
                      <Bank />
                    </View>
                    <Text style={tw`text-gray-800 font-bold text-xs`}>
                      Bank BTN
                    </Text>
                  </View>
                  <Add />
                </View>
              </View>
              <View style={tw`p-2 border-b border-mgray py-3`}>
                <View style={tw`flex-row items-center justify-between `}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`mx-2 border border-gray-300 rounded-md`}>
                      <Bank />
                    </View>
                    <Text style={tw`text-gray-800 font-bold text-xs`}>
                      Bank Fan
                    </Text>
                  </View>
                  <Add />
                </View>
              </View>
            </>
          );
        }, [])}
      </ScrollView>
      <MemoizeBackHandlerDebitBank componentId={componentId} />
    </View>
  );
};

DebitBank.options = {
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

export default DebitBank;
