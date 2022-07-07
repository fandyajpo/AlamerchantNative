import React from "react";
import { View, Text, ScrollView } from "react-native";
import { BackHandlerEditProfile } from "../../component/profileMerchant/BackHandler";
import tw from "../../lib/tailwind";
import { Dropdown } from "../../lib/listSvg";
import { RadioButton } from "react-native-paper";

const UpdateOutletCategory = ({ componentId }) => {
  const outletCategory = [
    {
      cat: "Resto",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmaecenas eu eros",
    },
    {
      cat: "Resto",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmaecenas eu eros",
    },
    {
      cat: "Resto",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmaecenas eu eros",
    },
    {
      cat: "Resto",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmaecenas eu eros",
    },
    {
      cat: "Resto",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmaecenas eu eros",
    },
    {
      cat: "Resto",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmaecenas eu eros",
    },
    {
      cat: "Resto",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmaecenas eu eros",
    },
    {
      cat: "Resto",
      deskripsi:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncmaecenas eu eros",
    },
  ];

  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView
        style={tw`h-full mb-32`}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      >
        {outletCategory.map((o, i) => {
          return (
            <View style={tw`p-2`} key={i}>
              <View style={tw`border border-gray-300 rounded-md bg-white`}>
                <View style={tw`p-2 border-b border-gray-300`}>
                  <View style={tw`flex-row items-center justify-between`}>
                    <View style={tw`flex-row items-center`}>
                      <View style={tw`w-14 h-14 bg-mgray rounded-md mr-2`} />
                      <Text style={tw`text-sm font-bold text-gray-800`}>
                        Restaurant
                      </Text>
                    </View>
                    <RadioButton />
                  </View>
                  <Text style={tw`text-gray-800 py-2`}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc maecenas eu eros
                  </Text>
                </View>
                <View
                  style={tw`w-full p-2 flex-row items-center justify-between`}
                >
                  <Text style={tw`text-myellow`}>Selengkapnya</Text>
                  <Dropdown />
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <BackHandlerEditProfile
        componentId={componentId}
        title={"Pilih Category"}
      />
    </View>
  );
};

UpdateOutletCategory.options = {
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

export default UpdateOutletCategory;
