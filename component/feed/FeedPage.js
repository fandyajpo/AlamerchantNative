import React from "react";
import { View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import Animated, { useHandler, useEvent } from "react-native-reanimated";
import tw from "../../lib/tailwind";
import Header from "./Header";
import Feed from "./Content/Feed";
import Event from "./Content/Event";
import Mention from "./Content/Mention";
import FeedSwitch from "./FeedSwitch";
import FlyButton from "../../component/feed/FlyButton";

const AnimatedPager = React.memo(Animated.createAnimatedComponent(PagerView));

const usePagerScrollHandler = (handlers, dependencies) => {
  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
  const subscribeForEvents = ["onPageScroll"];

  return (
    useEvent <
    ((event) => {
      "worklet";
      const { onPageScroll } = handlers;
      if (onPageScroll && event.eventName.endsWith("onPageScroll")) {
        onPageScroll(event, context);
        console.log(event);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer)
  );
};

const MemoizeHeader = React.memo(Header);
const MemoizeFeedSwitch = React.memo(FeedSwitch);
const MemoizeFeed = React.memo(Feed);
const MemoizeEvent = React.memo(Event);
const MemoizeMention = React.memo(Mention);

const FeedPage = ({ componentId, feedRef, setFeedSwitch }) => {
  const handler = React.useCallback(
    usePagerScrollHandler({
      onPageScroll: (e) => {
        "worklet";
        console.log(e.offset, e.position);
      },
    }),
    []
  );

  const onPageSelected = React.useCallback((e) => {
    setFeedSwitch(e.nativeEvent.position);
  }, []);

  return (
    <View style={({ flex: 1 }, tw`bg-mgray`)}>
      <View
        style={tw`border-t-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute top-60 w-full h-4`}
      />

      <View style={tw`w-full h-full`}>
        <AnimatedPager
          ref={feedRef}
          style={{ flex: 1 }}
          initialPage={0}
          onPageSelected={onPageSelected}
          onPageScroll={handler}
        >
          <View>
            <MemoizeFeed componentId={componentId} />
          </View>
          <View>
            <MemoizeEvent componentId={componentId} />
          </View>
          <View>
            <MemoizeMention componentId={componentId} />
          </View>
        </AnimatedPager>
      </View>
      <View
        style={tw`border-b-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute bottom-0 w-full h-4 pb-2`}
      ></View>
    </View>
  );
};

export default React.memo(FeedPage);
