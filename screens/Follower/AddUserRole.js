import React from "react";
import { View, Text, ScrollView } from "react-native";
import BackHandlerComponent, {
  BackHandlerBeriPeran,
} from "../../component/followers/BackHandler";
import tw from "../../lib/tailwind";
import { RoleSvg } from "../../lib/listSvg";
import { RadioButton } from "react-native-paper";

const AddUserRole = ({ componentId }) => {
  const outletCategory = [
    {
      role_name: "Tidak ada",
      role_desc: "",
      status: "checked",
    },
    {
      role_name: "Avocat",
      role_desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maecenas eu eros ",

      role_color: "#F9934F",
      status: "unchecked",
    },
    {
      role_name: "Rafing Fan",
      role_desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maecenas eu eros ",
      role_color: "#9571F6",
      status: "unchecked",
    },
    {
      role_name: "Customer",
      role_desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maecenas eu eros ",
      role_color: "#AAC6EF",
      status: "unchecked",
    },
  ];

  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView
        style={tw`h-full mb-32`}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      >
        {outletCategory.map((r, i) => {
          return (
            <View style={tw`p-2`} key={i}>
              <View style={tw`border border-gray-300 rounded-md bg-white`}>
                <View style={tw`p-2 border-b border-gray-300`}>
                  <View style={tw`flex-row items-center justify-between`}>
                    <View style={tw`flex-col`}>
                      <Text style={tw`text-base font-bold text-gray-800`}>
                        {r.role_name}
                      </Text>
                      {r.role_color && (
                        <View
                          style={tw`bg-mgray py-1 px-2 rounded-full flex-row items-center mt-2`}
                        >
                          <RoleSvg col={r.role_color} />
                          <Text style={tw`text-sm text-[${r.role_color}] ml-2`}>
                            {r.role_name}
                          </Text>
                        </View>
                      )}
                    </View>

                    <RadioButton
                      value="c"
                      color="#F3B33D"
                      status={r.status}
                      uncheckedColor={"#9ca3af"}
                    />
                  </View>
                  {r.role_desc.length > 0 && (
                    <Text style={tw`text-gray-800 py-2`}>{r.role_desc}</Text>
                  )}
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <BackHandlerBeriPeran componentId={componentId} />
    </View>
  );
};

AddUserRole.options = {
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

export default AddUserRole;
