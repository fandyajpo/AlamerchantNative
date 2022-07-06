import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import { Navigation } from "react-native-navigation";
import SplashScreen from "react-native-splash-screen";
import tw from "../lib/tailwind";
const MyPager = ({ componentId }) => {
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
    <View style={tw`w-full h-full items-center justify-center`}>
      <View style={tw`w-full h-24 `}>
        <PagerView
          transitionStyle="scroll"
          style={styles.pagerView}
          initialPage={0}
        >
          <View key="1" style={tw`bg-blue-500`}>
            <Text>First page</Text>
          </View>
          <View key="2" style={tw`bg-red-500`}>
            <Text>Second page</Text>
          </View>
        </PagerView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default MyPager;
