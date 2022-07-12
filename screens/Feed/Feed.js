import React from "react";
import FeedPage from "../../component/feed/FeedPage";
import FeedSwitch from "../../component/feed/FeedSwitch";
import { View } from "react-native";
import tw from "../../lib/tailwind";

const MemoizeFeedPage = React.memo(FeedPage);
const MemoizeFeedSwitch = React.memo(FeedSwitch);

const Feed = ({ componentId }) => {
  const feedRef = React.useRef(0);
  const [feedSwitch, setFeedSwitch] = React.useState(0);

  return (
    <View>
      <View style={tw`absolute top-44 w-full z-20 px-2`}>
        <MemoizeFeedSwitch
          componentId={componentId}
          feedSwitch={feedSwitch}
          feedRef={feedRef}
          setFeedSwitch={setFeedSwitch}
        />
      </View>
      <MemoizeFeedPage
        feedRef={feedRef}
        feedSwitch={feedSwitch}
        componentId={componentId}
        setFeedSwitch={setFeedSwitch}
      />
    </View>
  );
};

export default React.memo(Feed);
