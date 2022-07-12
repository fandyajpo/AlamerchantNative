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

const MemoizeNewService = React.memo(NewService);
const MemoizeProcessService = React.memo(ProcessService);
const MemoizeReadyService = React.memo(ReadyService);
const MemoizeUnpaidService = React.memo(UnpaidService);
const MemoizeDoneService = React.memo(DoneService);

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
      <MemoizeNewService componentId={componentId} />
      <MemoizeProcessService componentId={componentId} />
      <MemoizeReadyService componentId={componentId} />
      <MemoizeUnpaidService componentId={componentId} />
      <MemoizeDoneService componentId={componentId} />
    </PagerView>
  );
};

export default React.memo(ProcessPage);
