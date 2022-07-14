import React from "react";
import { View } from "react-native";
import tw from "../../../lib/tailwind";
import Category from "../../../component/profileMerchant/MenuDanStock/CategoryList";
import CategorySwitch from "../../../component/profileMerchant/MenuDanStock/CategorySwitch";
import { BackHandlerCategoryMenu } from "../../../component/profileMerchant/BackHandler";
import { ScrollView } from "react-native-gesture-handler";
const CategoryList = ({ componentId }) => {
  const [status, setStatus] = React.useState(0);
  const statusRef = React.useRef(0);

  return (
    <View style={tw`mt-13 w-full h-full pb-32 bg-white`}>
      <CategorySwitch
        status={status}
        setStatus={setStatus}
        statusRef={statusRef}
      />

      <View style={tw`w-full h-full`}>
        <Category
          componentId={componentId}
          statusRef={statusRef}
          setStatus={setStatus}
        />
      </View>

      <BackHandlerCategoryMenu componentId={componentId} />
    </View>
  );
};

CategoryList.options = {
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

export default CategoryList;
