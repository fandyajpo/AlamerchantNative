import React from "react";
import { View, Text, ScrollView, SectionList } from "react-native";
import {
  OpenOrderStatus,
  CloseOrderStatus,
  CloseOutletStatus,
} from "../../lib/listSvg";
import tw from "../../lib/tailwind";
import { RadioButton } from "react-native-paper";

const Status = () => {
  const [checked, setChecked] = React.useState("a");
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      horizontal={false}
      centerContent={true}
    >
      <View style={tw`bg-white w-full h-auto py-4 flex-row`}>
        <View style={tw`mr-2`}>
          <RadioButton
            value="a"
            color="#F3B33D"
            status={checked === "a" ? "checked" : "unchecked"}
            onPress={() => setChecked("a")}
            uncheckedColor={"#9ca3af"}
          />
        </View>
        <View>
          <OpenOrderStatus />
          <Text style={tw`text-gray-800 text-base font-semibold mt-2 mr-10`}>
            Status dimana kamu bisa menerima orderan, dan menyelesaikan
            transaksi dengan pelanggan kamu.
          </Text>
        </View>
      </View>
      <View style={tw`bg-white w-full h-auto py-4 flex-row`}>
        <View style={tw`mr-2`}>
          <RadioButton
            value="b"
            color="#F3B33D"
            status={checked === "b" ? "checked" : "unchecked"}
            onPress={() => setChecked("b")}
            uncheckedColor={"#9ca3af"}
          />
        </View>
        <View>
          <CloseOrderStatus />
          <Text style={tw`text-gray-800 text-base font-semibold mt-2 mr-10`}>
            Status dimana kamu sudah nggak nerima lagi orderan, tapi bisa
            menyelesaikan transaksi dengan pelanggan kamu.
          </Text>
        </View>
      </View>
      <View style={tw`bg-white w-full h-auto py-4 flex-row`}>
        <View style={tw`mr-2`}>
          <RadioButton
            value="c"
            color="#F3B33D"
            status={checked === "c" ? "checked" : "unchecked"}
            onPress={() => setChecked("c")}
            uncheckedColor={"#9ca3af"}
          />
        </View>
        <View>
          <CloseOutletStatus />
          <Text style={tw`text-gray-800 text-base font-semibold mt-2 mr-10`}>
            Status dimana kamu bisa menerima orderan, dan menyelesaikan
            transaksi dengan pelanggan kamu.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Status;
