import React from "react";
import { View } from "react-native";
import tw from "../lib/tailwind";
import FeedPage from "../component/feed/FeedPage";
import { Navigation } from "react-native-navigation";
import SplashScreen from "react-native-splash-screen";
const Feed = ({ componentId }) => {
  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () => SplashScreen.hide(),
        componentDidDisappear: () =>
          console.log(`componentDidDisappear ${componentId}`),
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);
  return (
    <View>
      <View
        style={tw`border-t-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute top-60 w-full h-4`}
      />
      <View style={tw`w-full h-full`}>
        <FeedPage componentId={componentId} />
      </View>
      <View
        style={tw`border-b-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute bottom-0 w-full h-4 pb-2`}
      ></View>
    </View>
  );
};

export default React.memo(Feed);
