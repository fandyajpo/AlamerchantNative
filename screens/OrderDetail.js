import React from "react";
import { View, Text, ScrollView } from "react-native";
import BackHandlerComponent from "../component/orderDetail/BackHandler";
import { Dropdown, DineIn } from "../lib/listSvg";
import tw from "../lib/tailwind";

import { RadioButton } from "react-native-paper";

const order = [
  {
    key: "9023182",
    id: "32929402",
    food_name: `Nasi goreng`,
    modifier: "Ice",
    variant: "Small",
    item_length: 21,
    price: "20.222",
  },
  {
    key: "9023182",
    id: "32929402",
    food_name: `Nasi goreng`,
    modifier: "Ice",
    variant: "Small",
    item_length: 21,
    price: "20.222",
  },
  {
    key: "9023182",
    id: "32929402",
    food_name: `Nasi goreng`,
    modifier: "Ice",
    variant: "Small",
    item_length: 21,
    price: "20.222",
  },
  {
    key: "9023182",
    id: "32929402",
    food_name: `Nasi goreng`,
    modifier: "Ice",
    variant: "Small",
    item_length: 21,
    price: "20.222",
  },
];

const OrderDetail = ({ componentId }) => {
  const sheetRef = React.useRef(null);
  return (
    <View style={tw`bg-white pt-13`}>
      <ScrollView
        contentContainerStyle={tw`w-full pb-50`}
        showsVerticalScrollIndicator={false}
        renderToHardwareTextureAndroid={true}
        shouldRasterizeIOS={true}
      >
        <View
          style={tw`w-full border-b border-mgray flex-row items-center  p-4`}
        >
          <View style={tw`flex-row items-center`}>
            <View
              style={tw`bg-myellow/20 w-11 h-11 rounded-md mr-2 items-center justify-center`}
            >
              <Text style={tw`text-myellow font-bold text-base`}>2999</Text>
            </View>
            <View>
              <Text style={tw`text-gray-800 font-bold`}>Fandy Habibi</Text>
              <Text style={tw`text-gray-400`}>08:18, 08 Jul</Text>
            </View>
          </View>
        </View>
        <View style={tw`p-4`}>
          <View style={tw`mb-2`}>
            <Text style={tw`text-base font-bold text-gray-800`}>
              Tipe Servis
            </Text>
          </View>
          <DineIn />
        </View>
        <View style={tw`p-4`}>
          <View style={tw`mb-2`}>
            <Text style={tw`text-base font-bold text-gray-800`}>
              Sistem Bayar
            </Text>
          </View>
          <View style={tw`flex-row items-center justify-center`}>
            <View style={tw`flex-row items-center w-2/4`}>
              <RadioButton
                value="a"
                color="#F3B33D"
                status={"checked"}
                uncheckedColor={"#9ca3af"}
              />
              <Text style={tw`text-sm text-gray-800`}>Bayar Sekarang</Text>
            </View>
            <View style={tw`flex-row items-center w-2/4`}>
              <RadioButton
                value="a"
                color="#F3B33D"
                status={"unchecked"}
                uncheckedColor={"#9ca3af"}
              />
              <Text style={tw`text-sm text-gray-800`}>Bayar Nanti</Text>
            </View>
          </View>
        </View>
        <View style={tw`w-full h-2 bg-mgray`} />
        <View style={tw`px-3`}>
          <View>
            <Text style={tw`text-base text-gray-800 py-2 font-bold`}>
              Daftar Pesanan
            </Text>
          </View>
          {order.map((o, i) => {
            return (
              <View
                key={i}
                style={tw`bg-white border border-gray-300 mb-2 rounded-md p-2 flex-col`}
              >
                <View style={tw`flex-row`}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`bg-black w-12 h-12 rounded-md mr-2`} />
                    <View>
                      <Text style={tw`text-gray-800 font-bold text-sm`}>
                        {o.food_name}
                      </Text>
                      <Text style={tw`text-gray-800 text-xs`}>{"apa"}</Text>
                      <Text style={tw`text-gray-800 text-xs`}>{"apa"}</Text>
                    </View>
                  </View>
                </View>

                <View style={tw`flex-row items-center justify-between mt-2`}>
                  <View style={tw`flex-row items-center`}>
                    <View style={tw`w-14`} />
                    <Text style={tw`text-gray-800  text-sm`}>
                      {o.item_length} Items
                    </Text>
                  </View>
                  <Text style={tw`text-gray-800 font-bold text-xs`}>
                    {o.price}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={tw`px-4`}>
          <Text style={tw`text-base font-bold text-gray-800`}>
            Detail Harga
          </Text>
          <View style={tw`py-2`}>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-800`}>Total</Text>
              <Text style={tw`text-sm text-gray-800`}>Rp 95.000</Text>
            </View>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-800`}>Discount</Text>
              <Text style={tw`text-sm text-gray-800`}>-</Text>
            </View>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-800`}>Tax</Text>
              <Text style={tw`text-sm text-gray-800`}>Rp 800</Text>
            </View>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-800`}>Service App</Text>
              <Text style={tw`text-sm text-gray-800`}>Rp 500</Text>
            </View>
          </View>
        </View>
        <View style={tw`px-4`}>
          <Text style={tw`text-base font-bold text-gray-800`}>
            Detail Harga
          </Text>
          <View style={tw`py-2`}>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-800`}>Total</Text>
              <Text style={tw`text-sm text-gray-800`}>Rp 95.000</Text>
            </View>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-800`}>Discount</Text>
              <Text style={tw`text-sm text-gray-800`}>-</Text>
            </View>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-800`}>Tax</Text>
              <Text style={tw`text-sm text-gray-800`}>Rp 800</Text>
            </View>
            <View style={tw`flex-row justify-between mb-2`}>
              <Text style={tw`text-sm text-gray-800`}>Service App</Text>
              <Text style={tw`text-sm text-gray-800`}>Rp 500</Text>
            </View>
          </View>
        </View>

        {/* <BottomSheet sheetRef={sheetRef} /> */}
      </ScrollView>
      <BackHandlerComponent componentId={componentId} />
    </View>
  );
};

OrderDetail.options = {
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

export default OrderDetail;

// <View
//         style={tw`w-full h-auto bg-white/95 rounded-xl border border-gray-300 shadow-sm my-2`}>
// <View
//   style={tw`w-full border-b border-gray-300 flex-row items-center justify-between p-3`}>
//   <View style={tw`flex-row items-center`}>
//     <View
//       style={tw`bg-myellow/20 w-16 h-16 rounded-md mr-2 items-center justify-center`}>
//       <Text style={tw`text-myellow font-bold text-base`}>2999</Text>
//     </View>
//     <View>
//       <Text style={tw`text-gray-800 font-bold`}>Fandy Habibi</Text>
//       <Text style={tw`text-gray-400`}>08:18, 08 Jul</Text>
//     </View>
//   </View>
//   <Dropdown />
// </View>
//         <View style={tw`p-3`}>
//           <View style={tw`w-full flex-row items-center`}>
//             <View style={tw`mr-2`}>
//               <InRoom />
//             </View>
//             <AlacarteLable />
//           </View>
//           <View>
//             <Text style={tw`text-gray-800 mt-2 text-sm`}>1 Item</Text>
//             <View style={tw`flex-row items-center justify-between mt-2`}>
//               <Text style={tw`text-gray-800 text-sm`}>Pendapatan Bersih</Text>
//               <Text style={tw`text-gray-800 text-sm`}>90.000</Text>
//             </View>
//             <View style={tw`flex-row items-center justify-between mt-2`}>
//               <View style={tw`flex-row items-center`}>
//                 <EPayment />
//                 <Text style={tw`text-sm font-bold text-gray-800`}>
//                   E-payment
//                 </Text>
//               </View>
//               <Text style={tw`text-gray-800 text-sm`}>Done</Text>
//             </View>
//           </View>
//         </View>
//       </View>
