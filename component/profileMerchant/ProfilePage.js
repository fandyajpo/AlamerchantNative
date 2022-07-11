import React from "react";
import { View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import tw from "../../lib/tailwind";
import Header from "./Header";
import Outlet from "./Detail/Outlet";
import Info from "./Detail/Info";
import ProfileSwitch from "./ProfileSwitch";

const MemoizeHeader = React.memo(Header);
const MemoizeProfileSwitch = React.memo(ProfileSwitch);
const MemoizeOutlet = React.memo(Outlet);
const MemoizeInfo = React.memo(Info);

const FeedPage = ({ componentId, profileSheetRef }) => {
  const profileRef = React.useRef(0);
  const [profilePage, setProfilePage] = React.useState(0);

  return (
    <View style={({ flex: 1 }, tw`bg-mgray`)}>
      <View>
        <MemoizeHeader
          componentId={componentId}
          profileSheetRef={profileSheetRef}
        />
        <View style={tw`w-full absolute z-20 top-44 flex-row`}>
          <MemoizeProfileSwitch
            profileRef={profileRef}
            setProfilePage={setProfilePage}
            profilePage={profilePage}
          />
        </View>
      </View>
      <View style={tw`w-full h-full bg-mgray`}>
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          ref={profileRef}
          onPageSelected={(e) => setProfilePage(e.nativeEvent.position)}
        >
          <View style={tw`bg-mgray`}>
            <MemoizeOutlet componentId={componentId} />
          </View>
          <View style={tw`bg-mgray`}>
            <MemoizeInfo />
          </View>
        </PagerView>
      </View>
    </View>
  );
};

export default React.memo(FeedPage);
