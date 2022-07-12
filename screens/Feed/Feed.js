import React from "react";
import FeedPage from "../../component/feed/FeedPage";
import FeedSwitch from "../../component/feed/FeedSwitch";
import { View } from "react-native";
import Header from "../../component/feed/Header";
import tw from "../../lib/tailwind";
// const MemoizeFlyButton = React.memo(FlyButton);
const MemoizeFeedPage = React.memo(FeedPage);

const Feed = ({ componentId }) => {
  return <MemoizeFeedPage componentId={componentId} />;
};

export default React.memo(Feed);
