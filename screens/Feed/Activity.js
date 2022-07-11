import React from "react";
import { View, ScrollView } from "react-native";

import tw from "../../lib/tailwind";
import { BackHandlerActivity } from "../../component/feed/BackHandler";
import ActivityTerbaru from "../../component/feed/Activity/ActivityTerbaru";
import ActivityMingguIni from "../../component/feed/Activity/ActivityMingguIni";

const FeedActivity = ({ componentId }) => {
  return (
    <View style={tw`mt-13 w-full h-full pb-32 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`pb-12 bg-white px-2`}
        horizontal={false}
        scrollEnabled={true}
      >
        <ActivityTerbaru />
        <ActivityMingguIni />
      </ScrollView>
      <BackHandlerActivity componentId={componentId} />
    </View>
  );
};

FeedActivity.options = {
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

export default FeedActivity;
