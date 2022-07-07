import React, { useEffect, useMemo } from "react";
import { View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import tw from "../../lib/tailwind";
import Header from "./Header";

import Outlet from "./Detail/Outlet";
import Info from "./Detail/Info";

const MemoizeOutlet = React.memo(({ componentId }) => {
  console.log("ALERT : [OUTLET] Appear means im rerendered");
  return <Outlet componentId={componentId} />;
});

const MemoizeInfo = React.memo(() => {
  console.log("ALERT : [INFO] Appear means im rerendered");
  return <Info />;
});

const FeedPage = ({ componentId, profileSheetRef }) => {
  const profileRef = React.useRef(0);
  const [profilePage, setProfilePage] = React.useState(0);

  return (
    <View style={({ flex: 1 }, tw`bg-mgray`)}>
      {useMemo(() => {
        return (
          <Header
            componentId={componentId}
            profileSheetRef={profileSheetRef}
            profileRef={profileRef}
            profilePage={profilePage}
            setProfilePage={setProfilePage}
          />
        );
      }, [profilePage])}
      <View style={tw`w-full h-full bg-mgray`}>
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          ref={profileRef}
          onPageSelected={(e) => setProfilePage(e.nativeEvent.position)}
        >
          <View style={tw`bg-mgray`}>
            {useMemo(() => {
              console.log("render outlet");
              return <Outlet />;
            })}
            {/* <MemoizeOutlet componentId={componentId} /> */}
          </View>
          <View style={tw`bg-mgray`}>
            {useMemo(() => {
              console.log("render info");
              return <Info />;
            })}
            {/* <MemoizeInfo /> */}
          </View>
        </PagerView>
      </View>
    </View>
  );
};

export default React.memo(FeedPage);
