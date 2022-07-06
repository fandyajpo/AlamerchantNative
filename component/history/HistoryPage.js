import React, { useCallback } from "react";
import { View, StyleSheet, Text } from "react-native";
import PagerView from "react-native-pager-view";
import Animated, { useHandler, useEvent } from "react-native-reanimated";
import tw from "../../lib/tailwind";

import AllOrder from "./orderService/AllOrder";
import Canceled from "./orderService/Canceled";
import OrderDone from "./orderService/OrderDone";
import Rejected from "./orderService/Rejected";

const MemoizaAllOrder = React.memo(() => {
  return <AllOrder />;
});
const MemoizaCanceled = React.memo(() => {
  return <Canceled />;
});
const MemoizaOrderDone = React.memo(() => {
  return <OrderDone />;
});
const MemoizaRejected = React.memo(() => {
  return <Rejected />;
});

const AnimatedPager = Animated.createAnimatedComponent(PagerView);

export function usePagerScrollHandler(handlers, dependencies) {
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
}

const HistoryPage = ({ typeRef, type, setType }) => {
  const handler = usePagerScrollHandler({
    onPageScroll: (e) => {
      "worklet";
      console.log(e.offset, e.position);
    },
  });

  return (
    <AnimatedPager
      ref={typeRef}
      style={[{ flex: 1 }, tw`bg-mgray`]}
      initialPage={0}
      onPageSelected={useCallback((e) => {
        setType(e.nativeEvent.position);
      }, [])}
      onPageScroll={handler}
    >
      <View>
        <MemoizaAllOrder />
      </View>
      <View>
        <MemoizaRejected />
      </View>
      <View>
        <MemoizaCanceled />
      </View>
      <View>
        <MemoizaOrderDone />
      </View>
    </AnimatedPager>
  );
};

export default React.memo(HistoryPage);
