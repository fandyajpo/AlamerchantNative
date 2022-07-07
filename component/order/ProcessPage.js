import React, { useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";
import PagerView from "react-native-pager-view";
import Animated, { useHandler, useEvent } from "react-native-reanimated";
import tw from "../../lib/tailwind";

import NewService from "./service/New";
import ProcessService from "./service/Process";
import ReadyService from "./service/Ready";
import UnpaidService from "./service/Unpaid";
import DoneService from "./service/Done";

const MemoizeNewService = React.memo(({ componentId }) => {
  return <NewService componentId={componentId} />;
});

const MemoizeProcessService = React.memo(({ componentId }) => {
  return <ProcessService componentId={componentId} />;
});

const MemoizeReadyService = React.memo(({ componentId }) => {
  return <ReadyService componentId={componentId} />;
});

const MemoizeUnpaidService = React.memo(({ componentId }) => {
  return <UnpaidService componentId={componentId} />;
});

const MemoizeDoneService = React.memo(({ componentId }) => {
  return <DoneService componentId={componentId} />;
});

const ProcessPage = ({ pageRef, setPages, componentId }) => {
  return (
    <PagerView
      ref={pageRef}
      style={{ flex: 1 }}
      initialPage={0}
      onPageSelected={(e) => {
        setPages(e.nativeEvent.position);
      }}
    >
      <View style={tw`bg-mgray`}>
        <MemoizeNewService componentId={componentId} />
      </View>
      <View style={tw`bg-mgray`}>
        <MemoizeProcessService componentId={componentId} />
      </View>
      <View style={tw`bg-mgray`}>
        <MemoizeReadyService componentId={componentId} />
      </View>
      <View style={tw`bg-mgray`}>
        <MemoizeUnpaidService componentId={componentId} />
      </View>
      <View style={tw`bg-mgray`}>
        <MemoizeDoneService componentId={componentId} />
      </View>
    </PagerView>
  );
};

export default React.memo(ProcessPage);
