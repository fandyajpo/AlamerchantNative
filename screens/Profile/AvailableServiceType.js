import React, { useCallback } from "react";
import { View, Text, ScrollView, Switch } from "react-native";
import { BackHandlerEditProfile } from "../../component/profileMerchant/BackHandler";
import { TaggingSheet } from "../../component/profileMerchant/BottomSheet";
import tw from "../../lib/tailwind";
import { ServiceDineIn, ServiceOffline } from "../../lib/listSvg";
import { RadioButton } from "react-native-paper";

const AvailableServiceType = ({ componentId }) => {
  const editProfileRef = React.useRef(null);

  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = useCallback(
    () => setIsEnabled((previousState) => !previousState),
    []
  );

  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView style={tw`mb-32`}>
        <View style={tw`p-2`}>
          <ServiceOffline />
          <Switch
            thumbColor={isEnabled ? "green" : "gray"}
            // ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          <Text style={tw`text-gray-800 font-bold text-sm mt-2`}>
            Tipe Pembayaran
          </Text>
          <View
            style={tw`flex-row items-center justify-between border-b py-2 border-mgray`}
          >
            <Text style={tw`text-sm text-gray-800`}>Bayar Sekarang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"checked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
          <View style={tw`flex-row items-center justify-between py-2 `}>
            <Text style={tw`text-sm text-gray-800`}>Bayar di belakang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"unchecked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <ServiceDineIn />
          <Text style={tw`text-gray-800 font-bold text-sm mt-2`}>
            Tipe Pembayaran
          </Text>
          <View
            style={tw`flex-row items-center justify-between border-b py-2 border-mgray`}
          >
            <Text style={tw`text-sm text-gray-800`}>Bayar Sekarang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"checked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
          <View style={tw`flex-row items-center justify-between py-2 `}>
            <Text style={tw`text-sm text-gray-800`}>Bayar di belakang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"unchecked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <ServiceOffline />
          <Text style={tw`text-gray-800 font-bold text-sm mt-2`}>
            Tipe Pembayaran
          </Text>
          <View
            style={tw`flex-row items-center justify-between border-b py-2 border-mgray`}
          >
            <Text style={tw`text-sm text-gray-800`}>Bayar Sekarang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"checked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
          <View style={tw`flex-row items-center justify-between py-2 `}>
            <Text style={tw`text-sm text-gray-800`}>Bayar di belakang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"unchecked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <ServiceOffline />
          <Text style={tw`text-gray-800 font-bold text-sm mt-2`}>
            Tipe Pembayaran
          </Text>
          <View
            style={tw`flex-row items-center justify-between border-b py-2 border-mgray`}
          >
            <Text style={tw`text-sm text-gray-800`}>Bayar Sekarang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"checked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
          <View style={tw`flex-row items-center justify-between py-2 `}>
            <Text style={tw`text-sm text-gray-800`}>Bayar di belakang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"unchecked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
        <View style={tw`p-2`}>
          <ServiceOffline />
          <Text style={tw`text-gray-800 font-bold text-sm mt-2`}>
            Tipe Pembayaran
          </Text>
          <View
            style={tw`flex-row items-center justify-between border-b py-2 border-mgray`}
          >
            <Text style={tw`text-sm text-gray-800`}>Bayar Sekarang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"checked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
          <View style={tw`flex-row items-center justify-between py-2 `}>
            <Text style={tw`text-sm text-gray-800`}>Bayar di belakang</Text>
            <RadioButton
              value="a"
              color="#F3B33D"
              status={"unchecked"}
              onPress={() => null}
              uncheckedColor={"#9ca3af"}
            />
          </View>
        </View>
        <View style={tw`bg-mgray w-full h-2 mb-2`} />
      </ScrollView>
      <TaggingSheet editProfileRef={editProfileRef} />
      <BackHandlerEditProfile
        componentId={componentId}
        title={"Edit Profile"}
      />
    </View>
  );
};

AvailableServiceType.options = {
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

export default AvailableServiceType;
