import React from "react";
import { View, ScrollView, Text } from "react-native";
import tw from "../../../lib/tailwind";
import AddCategory from "../../../component/profileMerchant/MenuDanStock/AddCategory";
import { BackHandlerAddCategory } from "../../../component/profileMerchant/BackHandler";
import { CancelAddCategory } from "../../../component/profileMerchant/BottomSheet";
const AddCategoryScreen = ({ componentId }) => {
  return (
    <View style={tw`mt-13 w-full h-full pb-32 bg-white`}>
      <ScrollView>
        <AddCategory />
      </ScrollView>
      <CancelAddCategory componentId={componentId} id={"cancelAddCategory"} />
      <BackHandlerAddCategory componentId={componentId} />
    </View>
  );
};

AddCategoryScreen.options = {
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

export default AddCategoryScreen;
