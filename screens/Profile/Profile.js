import React from "react";
import { View } from "react-native";
import { SheetManager } from "react-native-actions-sheet";

import tw from "../../lib/tailwind";
import { EditMerchantProfileSheet } from "../../component/profileMerchant/BottomSheet";
import ProfilePage from "../../component/profileMerchant/ProfilePage";

const ProfileMerchant = ({ componentId }) => {
  const profileSheetRef = React.useRef(null);
  return (
    <View>
      <View
        style={tw`border-t-2 border-r border-l rounded-full border-gray-300 z-50 w-full absolute top-60 h-4`}
      />
      <View style={tw`w-full h-full`}>
        <ProfilePage
          componentId={componentId}
          profileSheetRef={profileSheetRef}
        />
      </View>
      <View
        style={tw`border-b-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute bottom-0 w-full h-4 pb-2`}
      />

      <EditMerchantProfileSheet
        profileSheetRef={profileSheetRef}
        componentId={componentId}
      />
    </View>
  );
};

ProfileMerchant.options = {
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
          duration: 100,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        translationX: {
          from: 0,
          to: require("react-native").Dimensions.get("window").width,
          duration: 100,
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

export default React.memo(ProfileMerchant);
