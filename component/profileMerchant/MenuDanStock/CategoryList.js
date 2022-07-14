import React from "react";
import { View } from "react-native";
import PagerView from "react-native-pager-view";
import tw from "../../../lib/tailwind";

const CategoryList = ({ statusRef, setStatus }) => {
  const onPageSelected = React.useCallback((e) => {
    setStatus(e.nativeEvent.position);
  }, []);

  const scrollLog = React.useCallback((e) => {
    console.log(e.nativeEvent.offset);
  }, []);

  return (
    <PagerView
      ref={statusRef}
      style={[{ flex: 1 }, tw`bg-white`]}
      initialPage={0}
      onPageSelected={onPageSelected}
      onPageScroll={scrollLog}
    >
      <View style={tw`bg-white w-full h-full`}></View>
      <View style={tw`bg-white w-full h-full`}></View>
    </PagerView>
  );
};

export default React.memo(CategoryList);
